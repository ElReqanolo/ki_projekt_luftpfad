// Datenablage je Person: zwei Speicherorte mit derselben Schnittstelle.
//  - GitHub: Dateien werden als Commits im Repository unter ablage/Person_N/ gespeichert
//    (für die ganze Gruppe sichtbar; Schreiben braucht ein persönliches GitHub-Token).
//  - Lokal: IndexedDB im eigenen Browser (nur auf diesem Gerät).
(function () {
  const C = window.LUFTPFAD_CONFIG;
  const host = location.hostname.match(/^([^.]+)\.github\.io$/);
  if (host) {
    C.owner = host[1];
    const seg = location.pathname.split('/').filter(Boolean)[0];
    if (seg) C.repo = seg;
  }
  const LS = {
    get: (k, d) => { try { const v = localStorage.getItem('luftpfad.' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: (k, v) => { try { localStorage.setItem('luftpfad.' + k, JSON.stringify(v)); } catch (e) { /* privat */ } }
  };
  const HIDDEN = ['.gitkeep', '.meta.json'];
  const isHidden = p => HIDDEN.includes(p.split('/').pop());

  // ------------------------------------------------------------ GitHub
  const api = (p) => `https://api.github.com/repos/${C.owner}/${C.repo}/${p}`;
  const encPath = p => p.split('/').map(encodeURIComponent).join('/');
  let treeCache = null, treeTime = 0;

  async function gh(path, opts = {}) {
    const token = LS.get('token', '');
    const headers = Object.assign({ Accept: 'application/vnd.github+json' }, opts.headers || {});
    if (token) headers.Authorization = 'Bearer ' + token;
    const res = await fetch(api(path), Object.assign({}, opts, { headers }));
    if (!res.ok) {
      let msg = res.status + ' ' + res.statusText;
      try { const j = await res.json(); if (j.message) msg = j.message; } catch (e) { /* leer */ }
      const err = new Error(ghMessage(res.status, msg));
      err.status = res.status;
      throw err;
    }
    return res;
  }
  function ghMessage(status, msg) {
    if (status === 401) return 'GitHub lehnt das Token ab. Prüfen Sie es in den Ablage-Einstellungen.';
    if (status === 403 && /rate limit/i.test(msg)) return 'GitHub-Abfragelimit erreicht. Mit hinterlegtem Token gilt ein höheres Limit.';
    if (status === 403) return 'Das Token darf in diesem Repository nicht schreiben (Berechtigung „Contents: Read and write“ nötig).';
    if (status === 404) return 'Repository oder Datei nicht gefunden. Bei einem privaten Repository braucht auch das Lesen ein Token.';
    if (status === 409 || status === 422) return 'Die Datei wurde gerade von jemand anderem geändert. Bitte erneut versuchen.';
    return 'GitHub: ' + msg;
  }
  async function tree(force) {
    if (!force && treeCache && Date.now() - treeTime < 20000) return treeCache;
    const r = await gh(`git/trees/${encodeURIComponent(C.branch)}?recursive=1&t=${Date.now()}`);
    const j = await r.json();
    treeCache = j.tree; treeTime = Date.now();
    return treeCache;
  }
  const root = person => `${C.ablagePfad}/${person}`;
  function b64(file) {
    return new Promise((ok, fail) => {
      const fr = new FileReader();
      fr.onload = () => ok(String(fr.result).split(',')[1] || '');
      fr.onerror = () => fail(fr.error);
      fr.readAsDataURL(file);
    });
  }
  const textB64 = s => btoa(unescape(encodeURIComponent(s)));

  const GitHub = {
    name: 'github',
    label: () => `GitHub: ${C.owner}/${C.repo}`,
    canWrite: () => !!LS.get('token', ''),
    async list(person) {
      const pre = root(person) + '/';
      return (await tree()).filter(e => e.path.startsWith(pre)).map(e => ({
        path: e.path.slice(pre.length), type: e.type === 'tree' ? 'dir' : 'file', size: e.size || 0, sha: e.sha
      })).filter(e => !isHidden(e.path));
    },
    async listAll() {
      const pre = C.ablagePfad + '/';
      return (await tree()).filter(e => e.path.startsWith(pre) && e.type === 'blob' && !isHidden(e.path)).map(e => {
        const rest = e.path.slice(pre.length).split('/');
        return { person: rest[0], path: rest.slice(1).join('/'), type: 'file', size: e.size };
      });
    },
    async put(path, base64, message) {
      let sha;
      try { sha = (await (await gh(`contents/${encPath(path)}?ref=${encodeURIComponent(C.branch)}`)).json()).sha; } catch (e) { if (e.status !== 404) throw e; }
      await gh(`contents/${encPath(path)}`, { method: 'PUT', body: JSON.stringify({ message, content: base64, branch: C.branch, sha }) });
      treeCache = null;
    },
    async mkdir(person, dir) {
      await this.put(`${root(person)}/${dir}/.gitkeep`, '', `Ablage ${person}: Ordner ${dir} angelegt`);
    },
    async upload(person, dir, file) {
      const path = `${root(person)}/${dir ? dir + '/' : ''}${file.relPath || file.name}`;
      await this.put(path, await b64(file), `Ablage ${person}: ${file.relPath || file.name} hochgeladen`);
    },
    async remove(person, path) {
      const full = `${root(person)}/${path}`;
      const all = (await tree(true)).filter(e => e.type === 'blob' && (e.path === full || e.path.startsWith(full + '/')));
      for (const e of all) {
        await gh(`contents/${encPath(e.path)}`, { method: 'DELETE', body: JSON.stringify({ message: `Ablage ${person}: ${path} gelöscht`, sha: e.sha, branch: C.branch }) });
      }
      treeCache = null;
    },
    async read(person, path) {
      const r = await gh(`contents/${encPath(root(person) + '/' + path)}?ref=${encodeURIComponent(C.branch)}`, { headers: { Accept: 'application/vnd.github.raw' } });
      return r.blob();
    },
    async getMeta(person) {
      try {
        const r = await gh(`contents/${encPath(root(person) + '/.meta.json')}?ref=${encodeURIComponent(C.branch)}&t=${Date.now()}`, { headers: { Accept: 'application/vnd.github.raw' } });
        return JSON.parse(await r.text());
      } catch (e) { return {}; }
    },
    async setMeta(person, changes) {
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const meta = await this.getMeta(person);
          for (const [k, v] of Object.entries(changes)) { if (v === null) delete meta[k]; else meta[k] = v; }
          await this.put(`${root(person)}/.meta.json`, textB64(JSON.stringify(meta, null, 1)), `Ablage ${person}: Herkunftsangaben aktualisiert`);
          return;
        } catch (e) { if (attempt === 1 || ![409, 422].includes(e.status)) throw e; }
      }
    }
  };

  // ------------------------------------------------------------ Lokal (IndexedDB)
  let dbp;
  function db() {
    dbp = dbp || new Promise((ok, fail) => {
      const r = indexedDB.open('luftpfad-ablage', 1);
      r.onupgradeneeded = () => r.result.createObjectStore('items', { keyPath: 'key' });
      r.onsuccess = () => ok(r.result);
      r.onerror = () => fail(r.error);
    });
    return dbp;
  }
  async function tx(mode, fn) {
    const d = await db();
    return new Promise((ok, fail) => {
      const t = d.transaction('items', mode);
      const res = fn(t.objectStore('items'));
      t.oncomplete = () => ok(res && res.result !== undefined ? res.result : undefined);
      t.onerror = () => fail(t.error);
    });
  }
  const Local = {
    name: 'local',
    label: () => 'Nur dieser Browser',
    canWrite: () => true,
    async all() { return (await tx('readonly', s => s.getAll())) || []; },
    async list(person) {
      return (await this.all()).filter(i => i.person === person).map(i => ({ path: i.path, type: i.type, size: i.size || 0 }));
    },
    async listAll() {
      return (await this.all()).filter(i => i.type === 'file').map(i => ({ person: i.person, path: i.path, type: 'file', size: i.size }));
    },
    async mkdir(person, dir) {
      const parts = dir.split('/');
      await tx('readwrite', s => {
        for (let i = 1; i <= parts.length; i++) {
          const p = parts.slice(0, i).join('/');
          s.put({ key: person + '/' + p, person, path: p, type: 'dir', mtime: Date.now() });
        }
      });
    },
    async upload(person, dir, file) {
      const path = (dir ? dir + '/' : '') + (file.relPath || file.name);
      const parent = path.split('/').slice(0, -1).join('/');
      if (parent) await this.mkdir(person, parent);
      await tx('readwrite', s => s.put({ key: person + '/' + path, person, path, type: 'file', blob: file, size: file.size, mtime: Date.now() }));
    },
    async remove(person, path) {
      const items = (await this.all()).filter(i => i.person === person && (i.path === path || i.path.startsWith(path + '/')));
      await tx('readwrite', s => items.forEach(i => s.delete(i.key)));
    },
    async read(person, path) {
      const i = await tx('readonly', s => s.get(person + '/' + path));
      return i.blob;
    },
    async getMeta(person) { return LS.get('meta.' + person, {}); },
    async setMeta(person, changes) {
      const m = LS.get('meta.' + person, {});
      for (const [k, v] of Object.entries(changes)) { if (v === null) delete m[k]; else m[k] = v; }
      LS.set('meta.' + person, m);
    }
  };

  window.Ablage = {
    config: C, LS,
    backend() { return LS.get('mode', 'github') === 'local' ? Local : GitHub; },
    setMode(m) { LS.set('mode', m); treeCache = null; },
    setToken(t) { LS.set('token', t); treeCache = null; },
    token() { return LS.get('token', ''); },
    repoUrl() { return `https://github.com/${C.owner}/${C.repo}`; }
  };
})();
