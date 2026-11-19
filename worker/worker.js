/**
 * Luftpfad – Login-Vermittler (Cloudflare Worker)
 *
 * Hält das GitHub-Token geschützt und lässt angemeldete Personen über die Webseite
 * in die Datenablage und in status.json schreiben.
 *
 * Einstellungen im Cloudflare-Dashboard (Worker › Settings › Variables and Secrets):
 *   GITHUB_TOKEN     (Secret)  Fine-grained Token, nur dieses Repo, Contents: Read and write
 *   ADMIN_PASSWORD   (Secret)  Passwort für das Konto "admin"
 *   SESSION_SECRET   (Secret)  langer Zufallstext zum Signieren der Anmeldungen
 *   REPO             (Text)    ElReqanolo/ki_projekt_luftpfad
 *   BRANCH           (Text)    main
 *   ALLOWED_ORIGINS  (Text)    https://elreqanolo.github.io
 * Bindung (Worker › Settings › Bindings › KV namespace):
 *   USERS            KV-Namespace für die Benutzerkonten
 *
 * Rechte:
 *   admin   darf alles: jede Ablage, status.json, Benutzer verwalten
 *   person  darf in ablage/Person_<N>/ (eigene Ablage) schreiben und in status.json nur die
 *           Projekte ändern, bei denen sie federführend ist (Feld "person" je Projekt)
 *   Lesen geht für alle, auch ohne Anmeldung.
 */

const SESSION_DAYS = 30;
const PBKDF2_ROUNDS = 10000;
const enc = new TextEncoder();

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    try {
      const res = await route(request, env);
      const h = new Headers(res.headers);
      for (const [k, v] of Object.entries(cors)) h.set(k, v);
      return new Response(res.body, { status: res.status, headers: h });
    } catch (e) {
      const status = e.status || 500;
      return json({ error: e.status ? e.message : 'Interner Fehler im Login-Dienst: ' + e.message }, status, cors);
    }
  }
};

// ------------------------------------------------------------------ Routing
async function route(request, env) {
  const url = new URL(request.url);
  const p = url.pathname.replace(/\/+$/, '') || '/';
  const m = request.method;

  if (p === '/' && m === 'GET') return json({ dienst: 'Luftpfad Login', ok: true, repo: env.REPO });
  if (p === '/login' && m === 'POST') return login(request, env);
  if (p === '/me' && m === 'GET') return json({ user: await requireUser(request, env) });
  if (p === '/password' && m === 'POST') return changeOwnPassword(request, env);

  if (p === '/users' && m === 'GET') { await requireAdmin(request, env); return json({ users: await listUsers(env) }); }
  if (p === '/users' && m === 'POST') { await requireAdmin(request, env); return saveUser(request, env); }
  const um = p.match(/^\/users\/([a-z0-9._-]+)$/);
  if (um && m === 'DELETE') {
    await requireAdmin(request, env);
    await env.USERS.delete('user:' + um[1]);
    return json({ ok: true });
  }

  if (p.startsWith('/gh/')) return github(request, env, p.slice(4), url.search);
  throw httpError(404, 'Unbekannte Adresse.');
}

// ------------------------------------------------------------------ Anmeldung
async function login(request, env) {
  const { login, password } = await request.json();
  const name = String(login || '').trim().toLowerCase();
  if (!name || !password) throw httpError(400, 'Bitte Benutzername und Passwort angeben.');
  let user = null;
  if (name === 'admin') {
    if (!env.ADMIN_PASSWORD) throw httpError(500, 'ADMIN_PASSWORD ist im Worker nicht gesetzt.');
    if (await safeEqual(password, env.ADMIN_PASSWORD)) user = { login: 'admin', name: 'Admin', role: 'admin', person: null };
  } else {
    const rec = await env.USERS.get('user:' + name, 'json');
    if (rec && await verifyPassword(password, rec.salt, rec.hash)) user = publicUser(rec);
  }
  if (!user) throw httpError(401, 'Benutzername oder Passwort stimmt nicht.');
  const exp = Date.now() + SESSION_DAYS * 864e5;
  return json({ token: await sign({ ...user, exp }, env), user });
}

async function currentUser(request, env) {
  const h = request.headers.get('Authorization') || '';
  const t = h.startsWith('Bearer ') ? h.slice(7) : '';
  if (!t) return null;
  const payload = await verify(t, env);
  if (!payload || payload.exp < Date.now()) return null;
  // Gelöschte Konten verlieren sofort ihre Anmeldung
  if (payload.login !== 'admin') {
    const rec = await env.USERS.get('user:' + payload.login, 'json');
    if (!rec || (rec.changed && rec.changed > payload.iat)) return null;
    return publicUser(rec);
  }
  return { login: 'admin', name: 'Admin', role: 'admin', person: null };
}
async function requireUser(request, env) {
  const u = await currentUser(request, env);
  if (!u) throw httpError(401, 'Bitte anmelden. Die Anmeldung ist abgelaufen oder ungültig.');
  return u;
}
async function requireAdmin(request, env) {
  const u = await requireUser(request, env);
  if (u.role !== 'admin') throw httpError(403, 'Nur das Admin-Konto darf Benutzer verwalten.');
  return u;
}

async function changeOwnPassword(request, env) {
  const u = await requireUser(request, env);
  if (u.login === 'admin') throw httpError(400, 'Das Admin-Passwort wird im Cloudflare-Dashboard geändert (ADMIN_PASSWORD).');
  const { oldPassword, newPassword } = await request.json();
  const rec = await env.USERS.get('user:' + u.login, 'json');
  if (!rec || !await verifyPassword(oldPassword || '', rec.salt, rec.hash)) throw httpError(401, 'Das bisherige Passwort stimmt nicht.');
  checkPassword(newPassword);
  Object.assign(rec, await hashPassword(newPassword), { changed: Date.now() });
  await env.USERS.put('user:' + u.login, JSON.stringify(rec));
  return json({ ok: true, hinweis: 'Passwort geändert. Bitte neu anmelden.' });
}

// ------------------------------------------------------------------ Benutzerverwaltung
async function listUsers(env) {
  const out = [];
  let cursor;
  do {
    const r = await env.USERS.list({ prefix: 'user:', cursor });
    for (const k of r.keys) {
      const rec = await env.USERS.get(k.name, 'json');
      if (rec) out.push(publicUser(rec));
    }
    cursor = r.list_complete ? null : r.cursor;
  } while (cursor);
  return out.sort((a, b) => (a.person || 99) - (b.person || 99) || a.login.localeCompare(b.login));
}

async function saveUser(request, env) {
  const b = await request.json();
  const login = String(b.login || '').trim().toLowerCase();
  if (!/^[a-z0-9._-]{2,32}$/.test(login)) throw httpError(400, 'Benutzername: 2 bis 32 Zeichen, nur a–z, 0–9, Punkt, Bindestrich, Unterstrich.');
  if (login === 'admin') throw httpError(400, '„admin“ ist für das Admin-Konto reserviert.');
  const old = await env.USERS.get('user:' + login, 'json');
  const person = b.person === '' || b.person == null ? null : Number(b.person);
  if (person !== null && !(person >= 1 && person <= 9)) throw httpError(400, 'Person muss eine Zahl von 1 bis 9 sein oder leer bleiben.');
  const rec = {
    login,
    name: String(b.name || (old && old.name) || login).trim().slice(0, 60),
    person,
    role: b.role === 'admin' ? 'admin' : 'person',
    salt: old && old.salt, hash: old && old.hash,
    changed: old ? old.changed : Date.now()
  };
  if (b.password) { checkPassword(b.password); Object.assign(rec, await hashPassword(b.password), { changed: Date.now() }); }
  if (!rec.hash) throw httpError(400, 'Für ein neues Konto bitte ein Passwort vergeben.');
  await env.USERS.put('user:' + login, JSON.stringify(rec));
  return json({ ok: true, user: publicUser(rec) });
}
const publicUser = r => ({ login: r.login, name: r.name, person: r.person, role: r.role || 'person' });
function checkPassword(pw) {
  if (!pw || String(pw).length < 8) throw httpError(400, 'Das Passwort braucht mindestens 8 Zeichen.');
}

// ------------------------------------------------------------------ GitHub-Weiterleitung
async function github(request, env, path, search) {
  const m = request.method;
  if (!env.GITHUB_TOKEN || !env.REPO) throw httpError(500, 'GITHUB_TOKEN oder REPO ist im Worker nicht gesetzt.');
  path = decodeURIComponent(path);
  if (path.includes('..')) throw httpError(400, 'Ungültiger Pfad.');
  const params = new URLSearchParams(search);
  const apiUrl = `https://api.github.com/repos/${env.REPO}/${path.split('/').map(encodeURIComponent).join('/')}`;
  const ghHeaders = {
    Authorization: 'Bearer ' + env.GITHUB_TOKEN,
    'User-Agent': 'luftpfad-login-worker',
    'X-GitHub-Api-Version': '2022-11-28',
    Accept: request.headers.get('Accept') || 'application/vnd.github+json'
  };

  // Lesen: für alle, nur Inhalte und Dateibaum
  if (m === 'GET') {
    if (!/^(contents\/|contents$|git\/trees\/)/.test(path)) throw httpError(403, 'Dieser Bereich ist über den Login-Dienst nicht lesbar.');
    const keep = new URLSearchParams();
    for (const k of ['ref', 'recursive']) if (params.has(k)) keep.set(k, params.get(k));
    const r = await fetch(apiUrl + (keep.toString() ? '?' + keep : ''), { headers: ghHeaders });
    return new Response(r.body, { status: r.status, headers: { 'Content-Type': r.headers.get('Content-Type') || 'application/json', 'Cache-Control': 'no-store' } });
  }

  // Schreiben: nur angemeldet, nur erlaubte Pfade
  const user = await requireUser(request, env);
  const file = path.replace(/^contents\//, '');
  if (!path.startsWith('contents/') || !mayWrite(user, file)) {
    throw httpError(403, user.person
      ? `Sie dürfen nur in Ihrer eigenen Ablage (ablage/Person_${user.person}) und im Projektstatus schreiben.`
      : 'Ihr Konto ist keiner Person zugeordnet und darf nur den Projektstatus ändern. Das Admin-Konto kann das ändern.');
  }
  const branch = env.BRANCH || 'main';
  const sha = params.get('sha') || '';
  const what = (params.get('m') || (m === 'DELETE' ? 'gelöscht' : 'gespeichert')).slice(0, 120);
  const message = `${file.startsWith('ablage/') ? 'Ablage' : 'Status'}: ${file} ${what} (${user.name})`;
  const committer = { name: user.name, email: `${user.login}@users.noreply.luftpfad` };

  if (m === 'PUT') {
    // Inhalt kommt bereits als Base64 vom Browser und wird ohne Umwandlung weitergereicht
    const content = await request.text();
    if (content.indexOf('"') !== -1 || content.indexOf('\\') !== -1) throw httpError(400, 'Inhalt muss Base64 sein.');
    if (file === 'status.json' && user.role !== 'admin') await checkStatusChange(user, content, apiUrl, ghHeaders, branch);
    const body = '{"message":' + JSON.stringify(message) + ',"branch":' + JSON.stringify(branch) +
      (sha ? ',"sha":' + JSON.stringify(sha) : '') + ',"committer":' + JSON.stringify(committer) +
      ',"content":"' + content + '"}';
    const r = await fetch(apiUrl, { method: 'PUT', headers: { ...ghHeaders, 'Content-Type': 'application/json' }, body });
    return passJson(r);
  }
  if (m === 'DELETE') {
    if (!sha) throw httpError(400, 'Zum Löschen fehlt die Prüfsumme (sha).');
    const r = await fetch(apiUrl, { method: 'DELETE', headers: { ...ghHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify({ message, sha, branch, committer }) });
    return passJson(r);
  }
  throw httpError(405, 'Methode nicht erlaubt.');
}

// Nur Projekte ändern, bei denen die Person federführend ist; alles andere muss gleich bleiben
async function checkStatusChange(user, content, apiUrl, ghHeaders, branch) {
  const r = await fetch(apiUrl + '?ref=' + encodeURIComponent(branch), { headers: { ...ghHeaders, Accept: 'application/vnd.github+json' } });
  if (!r.ok) throw httpError(502, 'Aktueller Projektstatus konnte nicht gelesen werden.');
  const cur = await r.json();
  const decode = b64 => JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(b64.replace(/\s/g, '')), c => c.charCodeAt(0))));
  let oldS, newS;
  try { oldS = decode(cur.content); newS = decode(content); } catch (e) { throw httpError(400, 'Projektstatus ist kein gültiges JSON.'); }
  const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  const { projekte: op = {}, ...oldRest } = oldS, { projekte: np = {}, ...newRest } = newS;
  if (!same(oldRest, newRest)) throw httpError(403, 'Nur die Projekteinträge dürfen geändert werden.');
  for (const id of new Set([...Object.keys(op), ...Object.keys(np)])) {
    if (same(op[id], np[id])) continue;
    const o = op[id], n = np[id];
    if (!o || !n || o.person == null || o.person !== user.person || n.person !== o.person) {
      throw httpError(403, `Verbesserungen und Abhaken bei ${id} sind nur der federführenden Person und dem Admin-Konto erlaubt.`);
    }
  }
}

function mayWrite(user, file) {
  if (file.includes('..') || file.startsWith('/')) return false;
  if (user.role === 'admin') return file === 'status.json' || file.startsWith('ablage/');
  if (file === 'status.json') return true;
  return user.person != null && file.startsWith(`ablage/Person_${user.person}/`);
}

async function passJson(r) {
  const text = await r.text();
  return new Response(text, { status: r.status, headers: { 'Content-Type': 'application/json' } });
}

// ------------------------------------------------------------------ Hilfen: Krypto, Antworten
function corsHeaders(request, env) {
  const origin = request.headers.get('Origin') || '';
  const allowed = String(env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
  const ok = allowed.includes(origin) || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
  return {
    'Access-Control-Allow-Origin': ok ? origin : (allowed[0] || ''),
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type, Accept',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin'
  };
}
function json(obj, status = 200, extra = {}) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...extra } });
}
function httpError(status, message) { const e = new Error(message); e.status = status; return e; }

const b64u = buf => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const fromB64u = s => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
async function hmacKey(env) {
  if (!env.SESSION_SECRET || env.SESSION_SECRET.length < 16) throw httpError(500, 'SESSION_SECRET fehlt oder ist zu kurz (mindestens 16 Zeichen).');
  return crypto.subtle.importKey('raw', enc.encode(env.SESSION_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}
async function sign(payload, env) {
  const body = b64u(enc.encode(JSON.stringify({ ...payload, iat: Date.now() })));
  const sig = await crypto.subtle.sign('HMAC', await hmacKey(env), enc.encode(body));
  return body + '.' + b64u(sig);
}
async function verify(token, env) {
  const [body, sig] = token.split('.');
  if (!body || !sig) return null;
  try {
    const ok = await crypto.subtle.verify('HMAC', await hmacKey(env), fromB64u(sig), enc.encode(body));
    return ok ? JSON.parse(new TextDecoder().decode(fromB64u(body))) : null;
  } catch (e) { return null; }
}
async function hashPassword(pw) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  return { salt: b64u(salt), hash: await pbkdf2(pw, salt) };
}
async function verifyPassword(pw, salt, hash) {
  if (!salt || !hash) return false;
  return safeEqual(await pbkdf2(pw, fromB64u(salt)), hash);
}
async function pbkdf2(pw, salt) {
  const key = await crypto.subtle.importKey('raw', enc.encode(pw), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: PBKDF2_ROUNDS }, key, 256);
  return b64u(bits);
}
async function safeEqual(a, b) {
  const ha = new Uint8Array(await crypto.subtle.digest('SHA-256', enc.encode(String(a))));
  const hb = new Uint8Array(await crypto.subtle.digest('SHA-256', enc.encode(String(b))));
  let d = 0;
  for (let i = 0; i < ha.length; i++) d |= ha[i] ^ hb[i];
  return d === 0;
}
