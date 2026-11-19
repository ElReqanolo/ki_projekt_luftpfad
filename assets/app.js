/* Luftpfad Anlagentechnik – Projektakte. Einseitige Anwendung ohne Abhängigkeiten. */
(function () {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const main = $('#main');
  let S, FILES = {}, PROJ = {}, PERS = {}, CITES = {}, SEARCH = null;

  const COLORS = { 1: 'p1', 2: 'p2', 3: 'p3', 4: 'p4', 5: 'p5' };
  const AREA_LABEL = { Allgemein: 'Allgemein', Person_1: 'Person 1', Person_2: 'Person 2', Person_3: 'Person 3', Person_4: 'Person 4', Person_5: 'Person 5' };
  const fmtSize = b => b < 1024 ? b + ' B' : b < 1048576 ? (b / 1024).toFixed(0) + ' KB' : (b / 1048576).toFixed(1).replace('.', ',') + ' MB';
  const fileUrl = f => 'files/' + f.path.split('/').map(encodeURIComponent).join('/');
  const slug = s => s.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/Ä/g, 'Ae').replace(/Ö/g, 'Oe').replace(/Ü/g, 'Ue').replace(/ß/g, 'ss')
    .normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9]+/g, '_').replace(/^_|_$/g, '').slice(0, 42).replace(/_$/, '');
  const projFolder = p => `${p.id}_${slug(p.titel.split(':')[0])}`;
  const personDot = n => `<span class="dot ${COLORS[n]}" aria-hidden="true"></span>`;
  const personLink = n => { const p = PERS[n]; return `<a class="plink ${COLORS[n]}" href="#/person/${n}">${personDot(n)}${esc(p.name)}</a>`; };
  const ext = f => `<span class="ext ext-${f.ext}">${esc(f.ext)}</span>`;

  // ------------------------------------------------------------------ Projektstatus
  const ST = {
    offen: { cls: 'st-offen', label: () => 'Offen' },
    ki_erledigt: { cls: 'st-ki', label: o => o.runde > 1 ? `Von KI überarbeitet (Runde ${o.runde})` : 'Von KI erledigt' },
    infos: { cls: 'st-info', label: () => 'Infos benötigt' },
    ueberprueft: { cls: 'st-check', label: () => 'Überprüft, KI bessert nach' },
    fertig: { cls: 'st-done', label: () => 'Abgenommen' }
  };
  const AGENT_ZEIT = 'montags um 9:30 Uhr';
  const fmtDT = iso => { if (!iso) return ''; const d = new Date(iso); return isNaN(d) ? esc(iso) : d.toLocaleDateString('de-DE') + ', ' + d.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ' Uhr'; };
  const stBadge = o => { const d = ST[o.status] || ST.offen; return `<span class="badge ${d.cls}">${o.status === 'fertig' ? '<span aria-hidden="true">✓ </span>' : ''}${esc(d.label(o))}</span>`; };
  function paintStatus() {
    if (!Ablage.status.data) return;
    $$('[data-st]').forEach(el => { el.innerHTML = stBadge(Ablage.status.get(el.dataset.st)); });
    const sum = $('#st-summary');
    if (sum) {
      const ids = S.projekte.map(p => p.id);
      const n = k => ids.filter(id => Ablage.status.get(id).status === k).length;
      const last = Ablage.status.data.letzterLauf;
      sum.innerHTML = `${Object.keys(ST).map(k => `<span>${stBadge({ status: k, runde: 1 })} <b>${n(k)}</b></span>`).join('')}
        <span class="muted">Letzter Lauf des Agenten: ${last ? fmtDT(last) : 'noch keiner'} · läuft ${AGENT_ZEIT}</span>`;
    }
  }

  function toast(msg, ms = 3200) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('on');
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('on'), ms);
  }
  function download(blob, name) {
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }
  async function zipFiles(list, name) {
    toast(`ZIP wird gepackt (${list.length} Dateien) …`, 60000);
    const entries = [];
    for (const f of list) entries.push({ name: f.path, data: new Uint8Array(await (await fetch(fileUrl(f))).arrayBuffer()) });
    download(makeZip(entries), name); toast('ZIP heruntergeladen.');
  }

  // ------------------------------------------------------------------ Laden
  async function boot() {
    try { S = await (await fetch('data/site.json')).json(); } catch (e) {
      main.innerHTML = `<div class="empty"><h1>Daten nicht gefunden</h1><p>Die Datei data/site.json fehlt. Bauen Sie die Daten mit <code>python3 tools/build.py</code> und öffnen Sie die Seite über einen Webserver (nicht als Datei).</p></div>`;
      return;
    }
    S.dateien.forEach(f => FILES[f.id] = f);
    S.projekte.forEach(p => PROJ[p.id] = p);
    S.personen.forEach(p => PERS[p.nr] = p);
    indexCitations();
    $('#stand').textContent = 'Stand der Unterlagen: ' + S.stand;
    $('#nav-persons').insertAdjacentHTML('beforeend', S.personen.map(p =>
      `<a href="#/person/${p.nr}" data-nav="person-${p.nr}" class="${COLORS[p.nr]}">${personDot(p.nr)}<span>${esc(p.name)}<small>${esc(p.funktion.split(' (')[0])}</small></span></a>`).join(''));
    window.addEventListener('hashchange', route);
    route();
    Ablage.status.load().then(() => { paintStatus(); const sp = $('#st-panel'); if (sp) statusPanel(sp, PROJ[sp.dataset.id]); });
  }
  function indexCitations() {
    const add = (html, where) => (String(html).match(/data-file="([0-9a-f]+)"/g) || []).forEach(m => {
      const id = m.slice(11, -1); (CITES[id] = CITES[id] || new Map()).set(where.key, where);
    });
    const walk = (o, where) => { if (typeof o === 'string') add(o, where); else if (o && typeof o === 'object') Object.values(o).forEach(v => walk(v, where)); };
    S.projekte.forEach(p => walk(p, { key: 'p' + p.id, label: `${p.id} ${p.titel}`, href: `#/projekt/${p.id}` }));
    S.personen.forEach(p => walk(p.profil.concat([p.quelle]), { key: 'n' + p.nr, label: p.name, href: `#/person/${p.nr}` }));
    walk(S.firma, { key: 'firma', label: 'Unternehmen', href: '#/firma' });
  }

  // ------------------------------------------------------------------ Routing
  function route() {
    const [, view, a, b] = (location.hash || '#/').split('/');
    closeDrawer();
    document.body.classList.remove('nav-open'); $('.menu-btn').setAttribute('aria-expanded', 'false');
    const nav = view === 'person' ? 'person-' + a : view === 'projekt' ? 'projekte' : view === 'datei' ? 'dateien' : (view || 'home');
    $$('.nav a[data-nav]').forEach(x => x.toggleAttribute('aria-current', x.dataset.nav === nav));
    const views = { '': home, firma, projekte, projekt: () => projekt(a), dateien, datei: () => datei(a, b), person: () => person(a, b), suche: () => suche(decodeURIComponent(a || '')), admin };
    (views[view || ''] || home)();
    paintStatus();
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }

  // ------------------------------------------------------------------ Übersicht
  function home() {
    const ps = S.personen;
    const W = 980, y = 70, xs = ps.map((_, i) => 100 + i * 192);
    const svg = `<svg class="schema" viewBox="0 0 ${W} 230" role="img" aria-label="Die fünf Personen der Gruppe, verbunden wie Abzweige eines Luftkanals">
      <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="arrow"/></marker></defs>
      <rect x="10" y="${y - 16}" width="${W - 40}" height="32" rx="4" class="duct"/>
      <path d="M24 ${y} H${W - 50}" class="flow" marker-end="url(#arr)"/>
      ${ps.map((p, i) => `<a href="#/person/${p.nr}" class="branch ${COLORS[p.nr]}">
          <rect x="${xs[i] - 9}" y="${y + 16}" width="18" height="62" class="stub"/>
          <circle cx="${xs[i]}" cy="${y + 96}" r="17" class="node"/>
          <text x="${xs[i]}" y="${y + 101}" class="node-n">${p.nr}</text>
          <text x="${xs[i]}" y="${y + 138}" class="node-name">${esc(p.name)}</text>
          <text x="${xs[i]}" y="${y + 156}" class="node-role">${esc(p.funktion.split(' (')[0].replace('Servicetechniker ', 'Service '))}</text>
        </a>`).join('')}
    </svg>`;
    const due = S.projekte.filter(p => p.id !== 'START').slice().sort((a, b) => toDate(a.due) - toDate(b.due) || a.id.localeCompare(b.id));
    const lage = S.firmenbriefing.sections.find(s => s.title.startsWith('19'));
    main.innerHTML = `
      <section class="hero">
        <h1>Luftpfad Anlagentechnik GmbH</h1>
        <p class="lead">${S.firma.kurz} <span class="qs">${S.firma.kurzQuelle}</span></p>
        ${svg}
        <ul class="schema-list">${ps.map(p => `<li class="${COLORS[p.nr]}"><a href="#/person/${p.nr}">${personDot(p.nr)}<b>${esc(p.name)}</b> <span>${esc(p.funktion.split(' (')[0])}</span></a></li>`).join('')}</ul>
      </section>
      <section class="block">
        <h2>Was bis zum 2.12. ansteht</h2>
        <p class="st-summary" id="st-summary"></p>
        <ol class="timeline">${due.map(p => `<li class="${COLORS[p.person]}">
          <time>${esc(p.due.slice(0, 6))}</time>
          <a href="#/projekt/${p.id}"><b>${esc(p.id)}</b> ${esc(p.titel)}</a>
          <span class="who"><span data-st="${p.id}"></span>${personDot(p.person)}${esc(PERS[p.person].name)}</span></li>`).join('')}</ol>
        <p class="src-note">Termine aus ${S.allgemein['00_Bis_zum_2_12'] ? qLink(S.allgemein['00_Bis_zum_2_12'].file, 'Termine nach Datum') : ''} und den Aufgabenblättern.</p>
      </section>
      ${lage ? `<section class="block">
        <h2>Die Lage im November 2026</h2>
        <div class="prose">${lage.parts.map(x => x.html).join('')}</div>
        <p class="src-note">Quelle: ${qLink(S.firmenbriefing.file, 'Abschnitt 19, S. ' + lage.page)}</p>
      </section>` : ''}`;
  }
  const toDate = d => { const [t, m, j] = d.split('.'); return new Date(+j, +m - 1, +t).getTime(); };
  function qLink(fileId, loc) {
    const f = FILES[fileId]; if (!f) return '';
    const lab = (f.name.startsWith('Firmenbriefing') ? 'Firmenbriefing' : f.name.replace(/\.[^.]+$/, '').replace(/_/g, ' ')) + (loc ? ', ' + loc : '');
    return `<a class="q" href="#/datei/${f.id}" data-file="${f.id}" data-loc="${esc(loc || '')}" title="Quelle: ${esc(f.path)}">${esc(lab)}</a>`;
  }

  // ------------------------------------------------------------------ Unternehmen
  function firma() {
    const F = S.firma;
    main.innerHTML = `
      <header class="page-head"><h1>${esc(F.name)}</h1><p class="lead">${F.kurz} <span class="qs">${F.kurzQuelle}</span></p></header>
      <nav class="toc" aria-label="Auf dieser Seite">
        <a href="#steckbrief">Steckbrief</a><a href="#leistung">Leistung</a><a href="#vertraege">Verträge</a><a href="#gegenueber">Gegenüber</a><a href="#chronik">Chronik</a><a href="#abweichungen">Abweichungen</a><a href="#briefing">Firmenbriefing</a><a href="#kurs">Kursunterlagen</a>
      </nav>
      <section class="block" id="steckbrief"><h2>Steckbrief</h2>
        <table class="facts"><tbody>${F.steckbrief.map(r => `<tr><th scope="row">${esc(r.k)}</th><td>${r.v}<div class="qs">${r.q}</div></td></tr>`).join('')}</tbody></table>
      </section>
      <section class="block" id="leistung"><h2>Was wir tun und was nicht</h2><ul class="claims">${F.leistung.map(li).join('')}</ul>
        <h3>Unsere Rolle im Haus Bogenfeld 12</h3><ul class="claims">${F.rolle.map(li).join('')}</ul></section>
      <section class="block" id="vertraege"><h2>Verträge</h2>
        <table class="grid"><thead><tr><th>Vertrag</th><th>Partner</th><th>Beginn</th><th>Stand</th><th>Quelle</th></tr></thead>
        <tbody>${F.vertraege.map(v => `<tr><td>${v.name}</td><td>${v.partner}</td><td class="num">${v.beginn}</td><td>${v.stand}</td><td class="qs">${v.q}</td></tr>`).join('')}</tbody></table></section>
      <section class="block" id="gegenueber"><h2>Mit wem wir zu tun haben</h2>
        <table class="grid"><thead><tr><th>Firma</th><th>Rolle</th><th>Ansprechpersonen</th><th>Quelle</th></tr></thead>
        <tbody>${F.gegenueber.map(v => `<tr><td>${v.firma}</td><td>${v.rolle}</td><td>${v.personen}</td><td class="qs">${v.q}</td></tr>`).join('')}</tbody></table></section>
      <section class="block" id="chronik"><h2>Chronik</h2>
        <ol class="chron">${F.chronik.map(c => `<li><time>${c.d}</time><span>${c.t}</span><span class="qs">${c.q}</span></li>`).join('')}</ol></section>
      <section class="block" id="abweichungen"><h2>Wo sich Quellen widersprechen</h2>
        <p class="hint">Beide Fundstellen stehen nebeneinander. Was gilt, entscheidet die Gruppe nach Prüfung am Original.</p>
        <table class="grid diff"><thead><tr><th>Angabe</th><th>Quelle A</th><th>Quelle B</th></tr></thead>
        <tbody>${F.abweichungen.map(v => `<tr><th scope="row">${v.was}</th><td>${v.a}</td><td>${v.b}</td></tr>`).join('')}</tbody></table></section>
      <section class="block" id="briefing"><h2>Firmenbriefing, alle Abschnitte</h2>
        <p class="hint">Wortlaut aus ${qLink(S.firmenbriefing.file, '')}, Stand 18.11.2026. Jeder Abschnitt nennt seine Seite.</p>
        ${briefingHtml(S.firmenbriefing, null)}</section>
      <section class="block" id="kurs"><h2>Kursunterlagen der Gruppe</h2>
        ${[['00_Start_Gruppe', 'Startblatt der Gruppe'], ['00_Ablauf', 'Ablauf'], ['00_Bis_zum_2_12', 'Bis zum 2.12.'], ['00_Startfrage', 'Startfrage'], ['00_Inhaltsverzeichnis', 'Inhaltsverzeichnis']]
          .map(([k, t]) => `<details class="acc"><summary>${t}</summary><div class="prose">${S.allgemein[k].html}</div><p class="src-note">Quelle: ${qLink(S.allgemein[k].file, '')}</p></details>`).join('')}
      </section>`;
  }
  const li = s => `<li>${s}</li>`;

  function briefingHtml(b, owner) {
    return `${b.intro.trim() ? `<div class="prose intro">${b.intro}</div>` : ''}` + b.sections.map(sec => `
      <details class="acc">
        <summary><span>${esc(sec.title)}</span><span class="pg">S. ${sec.page}</span></summary>
        ${sec.parts.map(p => p.private ? `
          <div class="private" data-private>
            <h4>${esc(p.title)}</h4>
            <p>Diesen Teil legt laut Aufgabe A097 nur ${esc(owner || 'die Person')} selbst offen.</p>
            <button class="btn small" data-reveal>Trotzdem anzeigen</button>
            <div class="prose" hidden>${p.html}</div>
            <p class="src-note">Quelle: ${qLink(b.file, `${sec.title.split(' ')[0] === sec.title ? '' : 'Abschnitt ' + sec.title.split(' ')[0] + ', '}S. ${p.page}`)}</p>
          </div>` : `
          ${p.title ? `<h4>${esc(p.title)}</h4>` : ''}<div class="prose">${p.html}</div>`).join('')}
        <p class="src-note">Quelle: ${qLink(b.file, `Abschnitt ${esc(sec.title.split(' ')[0])}, S. ${sec.page}`)}</p>
      </details>`).join('');
  }

  // ------------------------------------------------------------------ Person
  function person(n, tab) {
    const p = PERS[n]; if (!p) return home();
    tab = tab || 'projekte';
    const lead = S.projekte.filter(x => x.person === p.nr);
    const part = S.projekte.filter(x => x.person !== p.nr && (x.persons || []).includes(p.nr));
    const tabs = [['projekte', 'Projekte'], ['ablage', 'Datenablage'], ['briefing', 'Personenbriefing'], ['dateien', 'Unterlagen im Ordner']];
    main.innerHTML = `
      <header class="person-head ${COLORS[p.nr]}">
        <p class="folder">${esc(p.ordner.replace('_', ' '))}</p>
        <h1>${esc(p.name)}</h1>
        <p class="role">${esc(p.funktion)}</p>
        <dl class="contact">
          <div><dt>Kürzel</dt><dd>${esc(p.kuerzel)}</dd></div>
          <div><dt>Im Unternehmen seit</dt><dd>${esc(p.seit)}</dd></div>
          <div><dt>Jahrgang</dt><dd>${esc(p.jahrgang)}</dd></div>
          <div><dt>Mail</dt><dd><a href="mailto:${esc(p.mail)}">${esc(p.mail)}</a></dd></div>
          <div><dt>Telefon</dt><dd>${esc(p.telefon)}</dd></div>
          <div><dt>Stunden bis 2.12.</dt><dd>${esc(p.stunden)}</dd></div>
        </dl>
        <p class="qs">${p.quelle}</p>
      </header>
      <section class="block profile"><ul class="claims">${p.profil.map(li).join('')}</ul>
        <p>Beginnt nach der Sitzung mit <b>${esc(p.beginnt)}</b> <span class="qs">${p.beginntQuelle}</span></p></section>
      <div class="tabs" role="tablist">${tabs.map(([k, t]) => `<a role="tab" href="#/person/${n}/${k}" aria-selected="${k === tab}">${t}</a>`).join('')}</div>
      <section class="block" id="tab"></section>`;
    const el = $('#tab');
    if (tab === 'projekte') {
      el.innerHTML = `<h2>Federführend</h2>${projList(lead)}${part.length ? `<h2>Beteiligt</h2>${projList(part)}` : ''}`;
    } else if (tab === 'briefing') {
      el.innerHTML = `<p class="hint">Persönliches Briefing, Stand 18.11.2026: ${qLink(p.briefing.file, '')} · Startblatt: ${qLink(p.startblatt, '')}</p>${briefingHtml(p.briefing, p.name)}`;
    } else if (tab === 'dateien') {
      const fs = S.dateien.filter(f => f.area === p.ordner);
      el.innerHTML = `<div class="row-between"><h2>Unterlagen im Ordner ${esc(p.ordner)}</h2><button class="btn" id="zip-person">Ordner als ZIP</button></div>${fileTable(fs, true)}`;
      $('#zip-person').onclick = () => zipFiles(fs, `${p.ordner}_${slug(p.name)}.zip`);
    } else if (tab === 'ablage') {
      ablage(el, p);
    }
  }
  function projList(list) {
    if (!list.length) return '<p class="hint">Keine Projekte.</p>';
    return `<ul class="projlist">${list.map(p => `<li class="${COLORS[p.person]}">
      <a href="#/projekt/${p.id}"><b>${esc(p.id)}</b><span>${esc(p.titel)}</span></a>
      <span class="meta"><span data-st="${p.id}"></span> bis ${esc(p.due)} · ${esc(p.aufwand)} · ${esc(p.kette)}</span></li>`).join('')}</ul>`;
  }

  // ------------------------------------------------------------------ Projekte
  function projekte() {
    const by = (location.hash.includes('nach=person')) ? 'person' : 'kette';
    const groups = new Map();
    S.projekte.forEach(p => {
      const k = by === 'person' ? p.person : p.kette;
      if (!groups.has(k)) groups.set(k, []); groups.get(k).push(p);
    });
    const order = by === 'person' ? [...groups.keys()].sort() : [...groups.keys()];
    main.innerHTML = `
      <header class="page-head"><h1>Projekte</h1>
        <p class="lead">Jede Aufgabe ist ein Projekt mit Zusammenfassung, Fristen und allen zugehörigen Dateien. Jede Aussage verweist auf die Stelle, aus der sie stammt.</p></header>
      <div class="seg" role="group" aria-label="Gruppieren nach">
        <a href="#/projekte" aria-pressed="${by === 'kette'}">nach Vorgang</a><a href="#/projekte/?nach=person" aria-pressed="${by === 'person'}">nach Person</a></div>
      ${order.map(k => `<section class="block"><h2>${by === 'person' ? personDot(k) + esc(PERS[k].name) : esc(k)}
        ${by === 'kette' && S.ketten[k] ? `<small>${esc(S.ketten[k])}</small>` : ''}</h2>${projList(groups.get(k))}</section>`).join('')}`;
  }

  async function projekt(id) {
    const p = PROJ[id]; if (!p) return projekte();
    const fs = S.dateien.filter(f => f.projects.includes(id));
    const folders = [...new Set(fs.map(f => f.path.split('/').slice(0, -1).join('/')))];
    main.innerHTML = `
      <header class="page-head proj ${COLORS[p.person]}">
        <p class="folder"><a href="#/projekte">Projekte</a> / ${esc(p.kette)}</p>
        <h1><span class="pid">${esc(p.id)}</span> ${esc(p.titel)}</h1>
        <dl class="contact">
          <div><dt>Federführend</dt><dd>${personLink(p.person)}</dd></div>
          <div><dt>Beteiligt</dt><dd>${(p.persons || []).filter(n => n !== p.person).map(personLink).join(' ') || '–'}</dd></div>
          <div><dt>Fertig bis</dt><dd>${esc(p.due)}</dd></div>
          <div><dt>Aufwand</dt><dd>${esc(p.aufwand)}</dd></div>
          <div><dt>Status</dt><dd data-st="${p.id}"></dd></div>
        </dl>
      </header>
      <section class="block status-panel" id="st-panel" data-id="${p.id}"><p class="hint">Status wird geladen …</p></section>
      <section class="block summary">
        <h2>Zusammenfassung</h2>
        <p class="hint">Aus den Unterlagen zusammengestellt. Die Markierung hinter jeder Aussage zeigt, aus welcher Datei und Stelle sie stammt.</p>
        <h3>Worum es geht</h3><p class="claim">${p.worum}</p>
        <h3>Was die Unterlagen sagen</h3><ul class="claims">${p.fakten.map(li).join('')}</ul>
        <h3>Abgabe und Fristen</h3><ul class="claims">${p.abgabe.map(li).join('')}</ul>
        <h3>Beteiligte und Übergaben</h3><ul class="claims">${p.beteiligte.map(li).join('')}</ul>
      </section>
      <section class="block">
        <div class="row-between"><h2>Dateien zum Projekt <small>${fs.length}</small></h2>${fs.length ? '<button class="btn" id="zip-proj">Alle als ZIP</button>' : ''}</div>
        ${fs.length ? folders.map(d => `<h4 class="folderpath">${esc(d)}</h4>${fileTable(fs.filter(f => f.path.startsWith(d + '/') && !f.path.slice(d.length + 1).includes('/')), false)}`).join('') : '<p class="hint">Die Unterlagen zu dieser Übung liegen im Kursteam und sind nicht Teil des Pakets.</p>'}
        <p class="src-note">Zuordnung nach Spalte „gebraucht für“ in ${qLink(S.allgemein['00_Inhaltsverzeichnis'].file, 'Dateien')} und dem Aufgabenblatt.</p>
      </section>
      <section class="block" id="proj-ablage"><h2>In der Datenablage abgelegt</h2><p class="hint">Wird geladen …</p></section>
      ${p.aufgabenblatt ? `<section class="block"><details class="acc"><summary>Aufgabenblatt im Wortlaut</summary>
        <div class="prose">${p.aufgabenblatt.html}</div><p class="src-note">Quelle: ${qLink(p.aufgabenblatt.file, '')}</p></details></section>` : ''}`;
    if (Ablage.status.data) statusPanel($('#st-panel'), p);
    const zb = $('#zip-proj'); if (zb) zb.onclick = () => zipFiles(fs, `${p.id}_${slug(p.titel)}.zip`);
    // Dateien aus der Ablage, die in einem Ordner mit der Projektnummer liegen
    const box = $('#proj-ablage');
    try {
      const all = await Ablage.backend().listAll();
      const hits = all.filter(x => x.path.split('/').some(seg => seg === id || seg.startsWith(id + '_')));
      box.innerHTML = `<h2>In der Datenablage abgelegt <small>${hits.length}</small></h2>` + (hits.length ? `<table class="grid files"><thead><tr><th>Datei</th><th>Person</th><th>Größe</th><th></th></tr></thead><tbody>
        ${hits.map(h => { const n = +h.person.split('_')[1]; return `<tr><td>${esc(h.path)}</td><td>${PERS[n] ? personLink(n) : esc(h.person)}</td><td class="num">${fmtSize(h.size || 0)}</td>
          <td class="act"><button class="btn small" data-dl-ablage="${esc(h.person)}|${esc(h.path)}">Herunterladen</button></td></tr>`; }).join('')}</tbody></table>`
        : `<p class="hint">Noch nichts abgelegt. Dateien, die eine Person in ihrer Datenablage im Ordner „${esc(projFolder(p))}“ ablegt, erscheinen hier.</p>`);
    } catch (e) { box.innerHTML = `<h2>In der Datenablage abgelegt</h2><p class="hint">${esc(e.message)}</p>`; }
  }

  // ------------------------------------------------------------------ Statuspanel je Projekt
  function statusPanel(el, p) {
    if (!el || !p) return;
    const o = Ablage.status.get(p.id);
    const me = Ablage.auth.user();
    const isLead = me && (me.role === 'admin' || me.person === p.person);
    const canWrite = Ablage.auth.enabled() ? !!isLead : !!Ablage.token();
    const open = o.feedback.filter(f => !f.erledigt);
    const steps = [['offen', 'Offen'], o.status === 'infos' ? ['infos', 'Infos benötigt'] : ['ki_erledigt', 'Von KI erledigt'], ['ueberprueft', 'Überprüft'], ['fertig', 'Abgenommen']];
    const idx = steps.findIndex(s => s[0] === o.status);
    const need = (o.benoetigt || []);
    el.innerHTML = `
      <div class="row-between"><h2>Bearbeitung durch den KI-Agenten</h2>${stBadge(o)}</div>
      <ol class="steps">${steps.map((s, i) => `<li class="${i < idx ? 'done' : i === idx ? 'now' : ''}">${s[1]}</li>`).join('')}</ol>
      ${o.status === 'offen' ? `<p>Der Agent bearbeitet dieses Projekt ${AGENT_ZEIT} und legt sein Ergebnis in der Datenablage der federführenden Person ab. Hinweise, die Sie vorher eintragen, berücksichtigt er.</p>` : ''}
      ${o.status === 'infos' ? `<div class="need-box"><h3>Diese Infos fehlen dem Agenten noch</h3>
        ${need.length ? `<ul>${need.map(n => `<li><b>${esc(n.was || n)}</b>${n.von ? ` <span class="muted">von ${esc(n.von)}</span>` : ''}${n.wo ? ` <span class="muted">· ${esc(n.wo)}</span>` : ''}${n.bis ? ` <span class="muted">· erwartet bis ${esc(n.bis)}</span>` : ''}</li>`).join('')}</ul>` : '<p>Der Agent hat keine Einzelheiten angegeben, siehe Hinweis unten.</p>'}
        <p>Tragen Sie die Infos unten ein oder hängen Sie die Dateien an (z. B. die Antwort aus Uebergaben/K61). Danach macht der Agent beim nächsten Lauf (${AGENT_ZEIT}) weiter.</p></div>` : ''}
      ${o.status === 'ueberprueft' ? `<p>Ihre Verbesserungen sind gespeichert. Der Agent arbeitet sie beim nächsten Lauf (${AGENT_ZEIT}) ein.</p>` : ''}
      ${o.status === 'fertig' ? `<p class="done-note">✓ Abgenommen${(o.verlauf.slice().reverse().find(v => v.art === 'abgenommen') || {}).von ? ' von ' + esc(o.verlauf.slice().reverse().find(v => v.art === 'abgenommen').von) : ''}. Der Agent fasst dieses Projekt nicht mehr an.</p>` : ''}
      ${o.ergebnis.length ? `<h3>Ergebnis der KI${o.runde ? ` <small>Runde ${o.runde}</small>` : ''}</h3>
        ${o.hinweis ? `<p class="ki-note">${esc(o.hinweis)}</p>` : ''}
        <ul class="results">${o.ergebnis.map(path => `<li><span>${esc(path.split('/').pop())}</span><span class="muted small">${esc(path.split('/').slice(0, -1).join('/'))}</span>
          <span class="act">${/\.(md|txt|csv)$/i.test(path) ? `<button class="btn small" data-view-repo="${esc(path)}">Ansehen</button>` : ''}<button class="btn small" data-get-repo="${esc(path)}">Herunterladen</button></span></li>`).join('')}</ul>` : ''}
      ${o.feedback.length ? `<h3>Verbesserungen, Infos und Fehler</h3><ul class="feedback">${o.feedback.slice().reverse().map(f => `
        <li class="${f.erledigt ? 'fb-done' : 'fb-open'}"><div class="fb-head"><b>${esc(f.von || 'Gruppe')}</b> <span class="muted small">${fmtDT(f.datum)}${f.runde ? ' · zu Runde ' + f.runde : ''}</span>
          ${f.art === 'infos' ? '<span class="badge st-info">Infos</span>' : ''}<span class="badge ${f.erledigt ? 'st-done' : 'st-check'}">${f.erledigt ? 'eingearbeitet' : 'offen'}</span></div>
          <p>${esc(f.text).replace(/\n/g, '<br>')}</p>
          ${(f.dateien || []).length ? `<ul class="fb-files">${f.dateien.map(d => `<li><span>${esc(d.split('/').pop().replace(/^\d{4}-\d\d-\d\d_\d{4}_/, ''))}</span>${/\.(md|txt|csv)$/i.test(d) ? `<button type="button" class="btn small" data-view-repo="${esc(d)}">Ansehen</button>` : ''}<button type="button" class="btn small" data-get-repo="${esc(d)}">Herunterladen</button></li>`).join('')}</ul>` : ''}${f.antwort ? `<p class="fb-answer"><b>Antwort der KI:</b> ${esc(f.antwort)}</p>` : ''}</li>`).join('')}</ul>` : ''}
      ${o.status !== 'fertig' ? `
        <form class="fb-form" id="fb-form">
          <label for="fb-text">${o.status === 'offen' ? 'Hinweis für die KI (optional)' : o.status === 'infos' ? 'Fehlende Infos eintragen' : 'Verbesserungen oder Fehler'}</label>
          <textarea id="fb-text" rows="5" placeholder="${o.status === 'infos' ? 'Zum Beispiel: Antwort von Kantbogen aus K61 vom 30.11.: Rechnung 2026/3325 wird mit dem Zahllauf am 1.12. bezahlt …' : o.status === 'offen' ? 'Zum Beispiel: Bitte die Zinsen bis zum 25.11. rechnen.' : 'Was ist falsch, was fehlt, was soll anders werden? Gern mit Datei und Stelle.'}" ${canWrite ? '' : 'disabled'}></textarea>
          <label class="fb-attach">Dateien anhängen (optional)<input type="file" id="fb-files" multiple ${canWrite ? '' : 'disabled'}>
            <small>Zum Beispiel eine korrigierte Tabelle, ein Bildschirmfoto der richtigen Stelle oder eine Antwort aus dem Kursteam. Die Dateien landen in der Ablage von ${esc(PERS[p.person].name)} unter „${esc(projFolder(p))}/Verbesserungen“.</small></label>
          <ul class="fb-picked" id="fb-picked"></ul>
          <div class="fb-row">${me ? `<span class="muted small">Eingetragen als <b>${esc(me.name)}</b></span><input type="hidden" id="fb-von" value="${esc(me.name)}">` : `<label>Name <input id="fb-von" value="${esc(Ablage.LS.get('name', ''))}" placeholder="Ihr Name" ${canWrite ? '' : 'disabled'}></label>`}
            <button class="btn primary" ${canWrite ? '' : 'disabled'}>${o.status === 'infos' ? 'Infos an KI geben' : o.status === 'offen' ? 'Hinweis speichern' : 'Als überprüft markieren und an KI geben'}</button></div>
          ${canWrite ? '' : Ablage.auth.enabled() ? (me ? `<p class="hint">Verbesserungen eintragen und abhaken kann nur ${esc(PERS[p.person].name)} als federführende Person (oder das Admin-Konto). Sehen können alle.</p>` : `<p class="hint">Verbesserungen eintragen und abhaken kann ${esc(PERS[p.person].name)} als federführende Person. Bitte <button type="button" class="link" data-login>anmelden</button>.</p>`) : `<p class="hint">Zum Eintragen ein GitHub-Token in den <button type="button" class="link" data-settings-global>Ablage-Einstellungen</button> hinterlegen.</p>`}
        </form>` : ''}
      ${o.status === 'ki_erledigt' ? `<label class="perfect"><input type="checkbox" id="fb-ok" ${canWrite ? '' : 'disabled'}> <span><b>Passt so, perfekt.</b> Haken setzen, um das Projekt abzunehmen.</span></label>` : ''}
      ${o.status === 'fertig' ? `<label class="perfect is-done"><input type="checkbox" id="fb-reopen" checked ${canWrite ? '' : 'disabled'}> <span><b>Abgenommen.</b> Haken entfernen, um die Abnahme zurückzunehmen.</span></label>` : ''}
      ${o.verlauf.length ? `<details class="acc"><summary>Verlauf (${o.verlauf.length})</summary><ol class="verlauf">${o.verlauf.slice().reverse().map(v => `<li><span class="muted small">${fmtDT(v.datum)}</span> <b>${esc(v.von || '')}</b> ${esc(v.text || v.art)}</li>`).join('')}</ol></details>` : ''}`;

    const now = () => new Date().toISOString();
    const save = async (fn, msg, done) => {
      el.classList.add('busy');
      try { await Ablage.status.update(p.id, fn, msg); toast(done); } catch (e) { toast(e.message, 6000); }
      el.classList.remove('busy'); paintStatus(); statusPanel(el, p);
    };
    const form = $('#fb-form', el);
    if (form) form.onsubmit = async e => {
      e.preventDefault();
      const picked = [...(($('#fb-files', el) || {}).files || [])];
      let text = $('#fb-text', el).value.trim(); const von = $('#fb-von', el).value.trim();
      if (!text && picked.length) text = 'Siehe angehängte Dateien.';
      if (!text) { toast('Bitte zuerst eintragen, was verbessert werden soll.'); $('#fb-text', el).focus(); return; }
      if (!von) { toast('Bitte Ihren Namen angeben.'); $('#fb-von', el).focus(); return; }
      Ablage.LS.set('name', von);
      const dateien = [];
      if (picked.length) {
        el.classList.add('busy');
        try {
          const gh = Ablage.github, person = `Person_${p.person}`, dir = `${projFolder(p)}/Verbesserungen`;
          const d0 = new Date(), z = n => String(n).padStart(2, '0'), stamp = `${d0.getFullYear()}-${z(d0.getMonth() + 1)}-${z(d0.getDate())}_${z(d0.getHours())}${z(d0.getMinutes())}`;
          const meta = {};
          for (let i = 0; i < picked.length; i++) {
            const f = picked[i];
            if (f.size > 50 * 1048576) throw new Error(`${f.name} ist größer als 50 MB.`);
            f.relPath = `${stamp}_${f.name}`;
            toast(`Lade hoch: ${f.name} (${i + 1}/${picked.length})`, 60000);
            await gh.upload(person, dir, f);
            dateien.push(`${Ablage.config.ablagePfad}/${person}/${dir}/${f.relPath}`);
            meta[`${dir}/${f.relPath}`] = { herkunft: `Verbesserung zu ${p.id}${o.runde ? ', Runde ' + o.runde : ''}`, von, am: new Date().toLocaleDateString('de-DE') };
          }
          await gh.setMeta(person, meta);
        } catch (er) { el.classList.remove('busy'); toast('Dateien nicht hochgeladen: ' + er.message, 7000); return; }
        el.classList.remove('busy');
      }
      save(x => {
        x.feedback.push(Object.assign({ datum: now(), von, text, runde: x.runde, erledigt: false }, dateien.length ? { dateien } : {}));
        const wasInfo = x.status === 'infos';
        const toCheck = x.status === 'ki_erledigt' || wasInfo;
        if (wasInfo) x.feedback[x.feedback.length - 1].art = 'infos';
        if (toCheck) x.status = 'ueberprueft';
        x.verlauf.push({ datum: now(), von, art: wasInfo ? 'infos' : 'feedback', text: wasInfo ? 'Fehlende Infos eingetragen, Status „Überprüft“' : toCheck ? 'Verbesserungen eingetragen, Status „Überprüft“' : 'Hinweis für die KI eingetragen' });
      }, `Status ${p.id}: ${o.status === 'infos' ? 'Infos' : 'Feedback'} von ${von}`, o.status === 'offen' ? 'Hinweis gespeichert.' : 'Gespeichert. Status: Überprüft.');
    };
    const fi = $('#fb-files', el);
    if (fi) fi.onchange = () => { $('#fb-picked', el).innerHTML = [...fi.files].map(f => `<li>${esc(f.name)} <span class="muted small">${fmtSize(f.size)}</span></li>`).join(''); };
    const ok = $('#fb-ok', el);
    if (ok) ok.onchange = async () => {
      const von = (me && me.name) || Ablage.LS.get('name', '') || (await ask('Projekt abnehmen', [{ name: 'von', label: 'Ihr Name' }], 'Abnehmen') || {}).von;
      if (!von) { ok.checked = false; return; }
      Ablage.LS.set('name', von);
      save(x => { x.status = 'fertig'; x.verlauf.push({ datum: now(), von, art: 'abgenommen', text: 'Haken gesetzt: abgenommen' }); }, `Status ${p.id}: abgenommen von ${von}`, 'Projekt abgenommen.');
    };
    const ro = $('#fb-reopen', el);
    if (ro) ro.onchange = () => {
      const von = (me && me.name) || Ablage.LS.get('name', '') || 'Gruppe';
      save(x => { x.status = 'ki_erledigt'; x.verlauf.push({ datum: now(), von, art: 'zurueckgenommen', text: 'Abnahme zurückgenommen' }); }, `Status ${p.id}: Abnahme zurückgenommen`, 'Abnahme zurückgenommen.');
    };
  }

  // ------------------------------------------------------------------ Dateien
  function fileTable(list, showFolder) {
    if (!list.length) return '<p class="hint">Keine Dateien.</p>';
    return `<table class="grid files"><thead><tr><th>Datei</th>${showFolder ? '<th>Ordner</th>' : ''}<th>Typ</th><th>Größe</th><th>Projekte</th><th><span class="vh">Aktionen</span></th></tr></thead><tbody>
      ${list.map(f => `<tr>
        <td><a href="#/datei/${f.id}">${esc(f.name)}</a></td>
        ${showFolder ? `<td class="muted">${esc(f.path.split('/').slice(0, -1).join('/'))}</td>` : ''}
        <td>${ext(f)}</td><td class="num">${fmtSize(f.size)}</td>
        <td><div class="tags">${f.projects.map(x => x === 'ALLG' ? '<span class="muted small">Allgemein</span>' : `<a href="#/projekt/${x}" class="tag">${x}</a>`).join('')}</div></td>
        <td class="act"><a class="btn small" href="${fileUrl(f)}" download>Herunterladen</a></td></tr>`).join('')}</tbody></table>`;
  }

  function dateien() {
    const q = new URLSearchParams((location.hash.split('?')[1]) || '');
    const area = q.get('bereich') || '', cat = q.get('art') || '', typ = q.get('typ') || '';
    const cats = [...new Set(S.dateien.map(f => f.category))], typs = [...new Set(S.dateien.map(f => f.ext))].sort();
    const fs = S.dateien.filter(f => (!area || f.area === area) && (!cat || f.category === cat) && (!typ || f.ext === typ));
    const opt = (v, cur, lab) => `<option value="${esc(v)}" ${v === cur ? 'selected' : ''}>${esc(lab || v)}</option>`;
    const folders = [...new Set(fs.map(f => f.path.split('/').slice(0, -1).join('/')))];
    main.innerHTML = `
      <header class="page-head"><h1>Alle Dateien</h1><p class="lead">${S.dateien.length} Originaldateien aus dem Paket, nach Ordnern wie im Kursteam. Jede Datei lässt sich ansehen und herunterladen.</p></header>
      <form class="filters" id="ff">
        <label>Bereich <select name="bereich">${opt('', area, 'alle')}${Object.keys(AREA_LABEL).map(k => opt(k, area, AREA_LABEL[k] + (PERS[k.split('_')[1]] ? ' – ' + PERS[k.split('_')[1]].name : ''))).join('')}</select></label>
        <label>Art <select name="art">${opt('', cat, 'alle')}${cats.map(c => opt(c, cat)).join('')}</select></label>
        <label>Typ <select name="typ">${opt('', typ, 'alle')}${typs.map(c => opt(c, typ)).join('')}</select></label>
        <span class="count">${fs.length} Dateien · ${fmtSize(fs.reduce((s, f) => s + f.size, 0))}</span>
        <button type="button" class="btn" id="zip-all">Auswahl als ZIP</button>
      </form>
      ${folders.map(d => `<section class="block tight"><h2 class="folderpath">${esc(d)}</h2>${fileTable(fs.filter(f => f.path.split('/').slice(0, -1).join('/') === d), false)}</section>`).join('')}`;
    $('#ff').onchange = e => {
      const fd = new URLSearchParams(new FormData(e.currentTarget)); [...fd.keys()].forEach(k => !fd.get(k) && fd.delete(k));
      location.hash = '#/dateien/?' + fd.toString();
    };
    $('#zip-all').onclick = () => zipFiles(fs, 'Luftpfad_Anlagentechnik_Auswahl.zip');
  }

  async function datei(id, pageArg) {
    const f = FILES[id]; if (!f) return dateien();
    const page = (pageArg || '').match(/seite-(\d+)/) ? +pageArg.split('-')[1] : null;
    const cites = [...(CITES[id] || new Map()).values()];
    main.innerHTML = `
      <header class="page-head"><p class="folder"><a href="#/dateien">Dateien</a> / ${esc(f.path.split('/').slice(0, -1).join(' / '))}</p>
        <h1 class="fname">${esc(f.name)}</h1>
        <div class="btnrow"><a class="btn primary" href="${fileUrl(f)}" download>Herunterladen (${fmtSize(f.size)})</a>
          <a class="btn" href="${fileUrl(f)}${page ? '#page=' + page : ''}" target="_blank" rel="noopener">Original im neuen Tab öffnen</a></div></header>
      <section class="block cols">
        <dl class="kv"><div><dt>Typ</dt><dd>${esc(f.kind)}</dd></div><div><dt>Bereich</dt><dd>${esc(AREA_LABEL[f.area] || f.area)}</dd></div>
          ${f.pages ? `<div><dt>Seiten</dt><dd>${f.pages}${f.ocr ? ' (Scan, Text per Texterkennung)' : ''}</dd></div>` : ''}
          ${f.hint ? `<div><dt>Laut Inhaltsverzeichnis gebraucht für</dt><dd>${esc(f.hint)}</dd></div>` : ''}
          <div><dt>Projekte</dt><dd><div class="tags">${f.projects.map(x => x === 'ALLG' ? '<span class="tag">Allgemein</span>' : `<a class="tag" href="#/projekt/${x}">${x} ${esc(PROJ[x] ? PROJ[x].titel : '')}</a>`).join('')}</div></dd></div>
          <div><dt>Zitiert auf</dt><dd>${cites.length ? cites.map(c => `<a href="${c.href}">${esc(c.label)}</a>`).join('<br>') : 'noch nirgends'}</dd></div></dl>
      </section>
      <section class="block" id="preview"><h2>Inhalt</h2></section>`;
    const pv = $('#preview');
    if (f.ext === 'pdf') pv.insertAdjacentHTML('beforeend', `<iframe class="pdf" src="${fileUrl(f)}#page=${page || 1}&view=FitH" title="${esc(f.name)}"></iframe>`);
    if (f.ext === 'png') pv.insertAdjacentHTML('beforeend', `<img class="plan" src="${fileUrl(f)}" alt="${esc(f.name)}">`);
    const txt = await (await fetch(`data/text/${f.id}.txt`)).text();
    if (txt.trim()) pv.insertAdjacentHTML('beforeend', `<details class="acc" ${f.ext === 'pdf' || f.ext === 'png' ? '' : 'open'}><summary>Textfassung${f.ocr ? ' (Texterkennung, kann Lesefehler enthalten)' : ''}</summary>${textView(txt, f)}</details>`);
    if (page) { const el = $(`#seite-${page}`); if (el) { el.closest('details').open = true; } }
  }
  function textView(txt, f) {
    if (f.ext === 'csv' || f.ext === 'xlsx') {
      const lines = txt.split('\n');
      const rows = lines.slice(0, 400).map(l => l.startsWith('--- Blatt') ? `<tr class="sheet"><th colspan="40">${esc(l.replace(/-/g, '').trim())}</th></tr>`
        : `<tr>${l.split(f.ext === 'csv' ? /[;,](?=(?:[^"]*"[^"]*")*[^"]*$)/ : ' | ').map(c => `<td>${esc(c.replace(/^"|"$/g, ''))}</td>`).join('')}</tr>`).join('');
      return `<div class="scroll"><table class="sheet-t"><tbody>${rows}</tbody></table></div>${lines.length > 400 ? `<p class="hint">Erste 400 von ${lines.length} Zeilen. Vollständig in der Originaldatei.</p>` : ''}`;
    }
    return `<pre class="text">${esc(txt).replace(/^--- Seite (\d+) ---$/gm, '<span class="pagemark" id="seite-$1">Seite $1</span>')}</pre>`;
  }

  // ------------------------------------------------------------------ Suche
  async function suche(q) {
    $('#q').value = q;
    main.innerHTML = `<header class="page-head"><h1>Suche</h1><p class="lead">„${esc(q)}“ in Dateinamen, Projekten und im Text aller Unterlagen.</p></header><section class="block" id="res"><p class="hint">Suche läuft …</p></section>`;
    if (q.trim().length < 2) { $('#res').innerHTML = '<p class="hint">Bitte mindestens zwei Zeichen eingeben.</p>'; return; }
    SEARCH = SEARCH || await (await fetch('data/search.json')).json();
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    const projHits = S.projekte.filter(p => terms.every(t => (p.id + ' ' + p.titel + ' ' + p.worum).toLowerCase().includes(t)));
    const fileHits = [];
    for (const f of S.dateien) {
      const body = SEARCH[f.id] || '', low = body.toLowerCase(), name = f.path.toLowerCase();
      if (!terms.every(t => low.includes(t) || name.includes(t))) continue;
      const i = low.indexOf(terms[0]);
      const pageMatch = i >= 0 ? (body.slice(0, i).match(/--- Seite (\d+) ---/g) || []).pop() : null;
      const snip = i >= 0 ? body.slice(Math.max(0, i - 90), i + 160) : '';
      fileHits.push({ f, page: pageMatch ? pageMatch.match(/\d+/)[0] : null, snip, n: terms.reduce((s, t) => s + low.split(t).length - 1, 0) });
    }
    fileHits.sort((a, b) => b.n - a.n);
    const mark = s => { let h = esc(s); terms.forEach(t => { h = h.replace(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), m => `<mark>${m}</mark>`); }); return h; };
    $('#res').innerHTML = `
      ${projHits.length ? `<h2>Projekte</h2>${projList(projHits)}` : ''}
      <h2>Unterlagen <small>${fileHits.length}</small></h2>
      ${fileHits.length ? `<ol class="hits">${fileHits.map(h => `<li><a href="#/datei/${h.f.id}${h.page ? '/seite-' + h.page : ''}">${esc(h.f.name)}</a>
        <span class="muted">${esc(h.f.path.split('/').slice(0, -1).join('/'))}${h.page ? ', Seite ' + h.page : ''} · ${h.n} Treffer</span>
        ${h.snip ? `<p>… ${mark(h.snip.replace(/--- Seite \d+ ---/g, ' '))} …</p>` : ''}</li>`).join('')}</ol>` : '<p class="hint">Keine Unterlagen enthalten alle Suchwörter. Versuchen Sie ein einzelnes Wort oder eine Belegnummer wie 2026/3328.</p>'}`;
  }
  let searchT;
  $('#q').addEventListener('input', e => { clearTimeout(searchT); const v = e.target.value; searchT = setTimeout(() => { if (v.trim().length > 1) location.hash = '#/suche/' + encodeURIComponent(v); }, 350); });

  // ------------------------------------------------------------------ Quellen-Leiste
  async function openDrawer(fileId, loc) {
    const f = FILES[fileId]; if (!f) return;
    const page = (loc.match(/S\.\s*(\d+)/) || [])[1];
    const d = $('#drawer'), inner = $('.drawer-inner', d);
    inner.innerHTML = `
      <button class="close" aria-label="Schließen">Schließen</button>
      <p class="folder">Quelle</p>
      <h2>${esc(f.name)}</h2>
      <p class="muted">${esc(f.path)}</p>
      ${loc ? `<p class="loc">Stelle: <b>${esc(loc)}</b></p>` : ''}
      <div class="btnrow">
        <a class="btn primary" href="#/datei/${f.id}${page ? '/seite-' + page : ''}">Datei ansehen</a>
        <a class="btn" href="${fileUrl(f)}" download>Herunterladen</a>
        ${f.ext === 'pdf' ? `<a class="btn" href="${fileUrl(f)}#page=${page || 1}" target="_blank" rel="noopener">PDF${page ? ' an Seite ' + page : ''} öffnen</a>` : ''}
      </div>
      <div class="excerpt"><p class="hint">Auszug wird geladen …</p></div>`;
    d.classList.add('on'); d.setAttribute('aria-hidden', 'false');
    $('.close', d).onclick = closeDrawer; $('.close', d).focus();
    const txt = await (await fetch(`data/text/${f.id}.txt`)).text();
    let part = txt;
    if (page) { const m = txt.split(/^--- Seite \d+ ---$/m); part = m[+page] || txt; }
    $('.excerpt', inner).innerHTML = `<h3>${page ? 'Text von Seite ' + page : 'Text der Datei'}</h3><pre class="text">${esc(part.trim().slice(0, 6000))}${part.length > 6000 ? '\n…' : ''}</pre>`;
  }
  function closeDrawer() { const d = $('#drawer'); d.classList.remove('on'); d.setAttribute('aria-hidden', 'true'); }

  document.addEventListener('click', e => {
    const q = e.target.closest('a.q');
    if (q && !e.metaKey && !e.ctrlKey) { e.preventDefault(); openDrawer(q.dataset.file, q.dataset.loc || ''); return; }
    const rv = e.target.closest('[data-reveal]');
    if (rv) { const box = rv.closest('[data-private]'); $('.prose', box).hidden = false; rv.remove(); return; }
    const gr = e.target.closest('[data-get-repo]');
    if (gr) { Ablage.readRepo(gr.dataset.getRepo).then(b => download(b, gr.dataset.getRepo.split('/').pop())).catch(err => toast(err.message)); return; }
    const vr = e.target.closest('[data-view-repo]');
    if (vr) { Ablage.readRepo(vr.dataset.viewRepo).then(b => b.text()).then(t => showText(vr.dataset.viewRepo, t)).catch(err => toast(err.message)); return; }
    if (e.target.closest('[data-settings-global]')) { settings(); return; }
    if (e.target.closest('[data-login]')) { loginDialog(); return; }
    const dl = e.target.closest('[data-dl-ablage]');
    if (dl) { const [pers, path] = dl.dataset.dlAblage.split('|'); Ablage.backend().read(pers, path).then(b => download(b, path.split('/').pop())).catch(err => toast(err.message)); }
    if (!e.target.closest('#drawer') && $('#drawer').classList.contains('on') && !q) closeDrawer();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
  $('.menu-btn').onclick = () => { const o = document.body.classList.toggle('nav-open'); $('.menu-btn').setAttribute('aria-expanded', String(o)); };

  // ------------------------------------------------------------------ Datenablage
  function ablage(el, p) {
    const B = () => Ablage.backend();
    let cwd = sessionStorage.getItem('cwd.' + p.ordner) || '';
    let items = [], meta = {};
    const myProjects = S.projekte.filter(x => x.person === p.nr || (x.persons || []).includes(p.nr));

    el.innerHTML = `
      <div class="row-between"><h2>Datenablage von ${esc(p.name)}</h2><span class="store-badge" id="badge"></span></div>
      <p class="hint" id="store-hint"></p>
      <div class="toolbar">
        <nav class="crumbs" id="crumbs" aria-label="Ordnerpfad"></nav>
        <div class="btnrow">
          <button class="btn" id="b-mkdir">Neuer Ordner</button>
          <label class="btn">Dateien hochladen<input type="file" id="b-files" multiple hidden></label>
          <label class="btn">Ordner hochladen<input type="file" id="b-dir" webkitdirectory multiple hidden></label>
          <button class="btn" id="b-zip">Ordner als ZIP</button>
        </div>
      </div>
      <div class="dropzone" id="drop"><div id="listing"><p class="hint">Wird geladen …</p></div>
        <p class="drop-hint">Dateien hierher ziehen, um sie in diesen Ordner hochzuladen.</p></div>
      <div id="proj-folders"></div>`;

    async function refresh() {
      const be = B();
      $('#badge').textContent = be.label();
      const me = Ablage.auth.user();
      $('#store-hint').innerHTML = be.name === 'github' && Ablage.auth.enabled()
        ? (!me ? `Lesen geht ohne Anmeldung. Zum Anlegen und Hochladen bitte <button class="link" data-login>anmelden</button>.`
          : be.canWritePerson(p.ordner) ? `Angemeldet als <b>${esc(me.name)}</b>. Dateien werden in <a href="${Ablage.repoUrl()}/tree/${Ablage.config.branch}/${Ablage.config.ablagePfad}/${p.ordner}" target="_blank" rel="noopener">ablage/${p.ordner}</a> gespeichert und sind für die ganze Gruppe sichtbar.`
          : `Angemeldet als <b>${esc(me.name)}</b>. In dieser Ablage dürfen nur ${esc(p.name)} und das Admin-Konto schreiben; lesen und herunterladen können alle.`)
        : be.name === 'github'
        ? (be.canWrite() ? `Dateien werden als Commit in <a href="${Ablage.repoUrl()}/tree/${Ablage.config.branch}/${Ablage.config.ablagePfad}/${p.ordner}" target="_blank" rel="noopener">ablage/${p.ordner}</a> gespeichert und sind für die ganze Gruppe sichtbar.`
          : `Lesen geht ohne Anmeldung. Zum Hochladen ein GitHub-Token in den <button class="link" data-settings>Ablage-Einstellungen</button> hinterlegen oder dort auf „Nur dieser Browser“ umstellen.`)
        : `Dateien bleiben nur in diesem Browser auf diesem Gerät. Für eine gemeinsame Ablage in den <button class="link" data-settings>Ablage-Einstellungen</button> GitHub wählen.`;
      try {
        [items, meta] = await Promise.all([be.list(p.ordner), be.getMeta(p.ordner)]);
      } catch (e) { $('#listing').innerHTML = `<p class="error">${esc(e.message)}</p>`; return; }
      if (cwd && !items.some(i => i.type === 'dir' && i.path === cwd)) cwd = '';
      draw();
    }
    function draw() {
      sessionStorage.setItem('cwd.' + p.ordner, cwd);
      const segs = cwd ? cwd.split('/') : [];
      $('#crumbs').innerHTML = `<button class="link" data-cd="">${esc(p.ordner)}</button>` + segs.map((s, i) => ` / <button class="link" data-cd="${esc(segs.slice(0, i + 1).join('/'))}">${esc(s)}</button>`).join('');
      const pre = cwd ? cwd + '/' : '';
      const here = items.filter(i => i.path.startsWith(pre) && i.path.length > pre.length && !i.path.slice(pre.length).includes('/'));
      const dirs = here.filter(i => i.type === 'dir').sort((a, b) => a.path.localeCompare(b.path));
      const files = here.filter(i => i.type === 'file').sort((a, b) => a.path.localeCompare(b.path));
      const count = d => items.filter(i => i.type === 'file' && i.path.startsWith(d + '/')).length;
      const pid = (cwd.split('/')[0].match(/^(A\d{3}|START|UEB-[A-Z]+)(_|$)/) || [])[1];
      $('#listing').innerHTML = (pid && PROJ[pid] ? `<p class="proj-link">Dieser Ordner gehört zum Projekt <a href="#/projekt/${pid}">${pid} ${esc(PROJ[pid].titel)}</a>.</p>` : '') +
        (dirs.length || files.length ? `<table class="grid files ablage"><thead><tr><th>Name</th><th>Herkunft</th><th>Größe</th><th><span class="vh">Aktionen</span></th></tr></thead><tbody>
        ${cwd ? `<tr><td colspan="4"><button class="link" data-cd="${esc(segs.slice(0, -1).join('/'))}">.. eine Ebene höher</button></td></tr>` : ''}
        ${dirs.map(d => `<tr class="dir"><td><button class="link folder-btn" data-cd="${esc(d.path)}">${esc(d.path.slice(pre.length))}</button></td><td class="muted">${count(d.path)} Dateien</td><td></td>
          <td class="act"><button class="btn small danger" data-rm="${esc(d.path)}" data-type="dir">Löschen</button></td></tr>`).join('')}
        ${files.map(f => { const m = meta[f.path] || {}; return `<tr><td>${esc(f.path.slice(pre.length))}</td>
          <td class="herkunft">${m.herkunft ? esc(m.herkunft) : '<span class="muted">nicht angegeben</span>'}${m.von || m.am ? `<small>${esc([m.von, m.am].filter(Boolean).join(', '))}</small>` : ''}</td>
          <td class="num">${fmtSize(f.size)}</td>
          <td class="act"><button class="btn small" data-get="${esc(f.path)}">Herunterladen</button><button class="btn small" data-edit="${esc(f.path)}">Herkunft</button><button class="btn small danger" data-rm="${esc(f.path)}" data-type="file">Löschen</button></td></tr>`; }).join('')}
        </tbody></table>` : `<div class="empty"><p>${cwd ? 'Dieser Ordner ist leer.' : 'Die Ablage ist noch leer.'} Laden Sie Dateien hoch oder legen Sie einen Ordner an.</p></div>`);
      // Projektordner vorschlagen
      const missing = myProjects.filter(x => !items.some(i => i.type === 'dir' && !i.path.includes('/') && (i.path === x.id || i.path.startsWith(x.id + '_'))));
      $('#proj-folders').innerHTML = !cwd && missing.length ? `<div class="suggest"><p>Ordner je Projekt halten die Ablage projektweise sortiert. Was in einem Projektordner liegt, erscheint auch auf der Projektseite.</p>
        <button class="btn" id="b-projdirs">${missing.length} Projektordner anlegen</button> <span class="muted">${missing.map(x => esc(projFolder(x))).join(', ')}</span></div>` : '';
      const pb = $('#b-projdirs'); if (pb) pb.onclick = () => guard(async () => { for (const x of missing) await B().mkdir(p.ordner, projFolder(x)); toast('Projektordner angelegt.'); });
    }
    const needWrite = () => {
      if (B().name === 'github' && Ablage.auth.enabled()) {
        if (!Ablage.auth.user()) { loginDialog('Zum Anlegen von Ordnern und Hochladen bitte anmelden.'); return true; }
        if (!B().canWritePerson(p.ordner)) { toast(`In dieser Ablage dürfen nur ${p.name} und das Admin-Konto schreiben.`, 5000); return true; }
        return false;
      }
      if (B().canWrite()) return false; settings('Zum Anlegen von Ordnern und Hochladen braucht die gemeinsame Ablage ein GitHub-Token. Tragen Sie es unten ein und klicken Sie auf „Token prüfen“. Alternativ „Nur dieser Browser“ wählen.'); return true; };
    async function guard(fn) {
      if (needWrite()) return;
      el.classList.add('busy');
      let err = null;
      try { await fn(); } catch (e) { err = e; toast(e.message, 6000); }
      el.classList.remove('busy');
      await refresh();
      if (err) $('#listing').insertAdjacentHTML('afterbegin', `<p class="error ablage-err">Nicht gespeichert: ${esc(err.message)}</p>`);
    }
    async function uploadFiles(fileList) {
      const list = [...fileList]; if (!list.length || needWrite()) return;
      list.forEach(f => { f.relPath = f.webkitRelativePath || f.name; });
      const info = await ask(`${list.length} ${list.length === 1 ? 'Datei' : 'Dateien'} nach „${p.ordner}${cwd ? '/' + cwd : ''}“ hochladen`, [
        { name: 'herkunft', label: 'Herkunft oder Quelle', hint: 'Woher stammt der Inhalt? Zum Beispiel „Antwort Kantbogen aus Uebergaben/K61 vom 30.11.“ oder „eigene Auswertung aus Trend_EZ_EG…csv“.' },
        { name: 'von', label: 'Abgelegt von', value: (Ablage.auth.user() || {}).name || Ablage.LS.get('name', p.name) }], 'Hochladen');
      if (!info) return;
      Ablage.LS.set('name', info.von);
      await guard(async () => {
        const am = new Date().toLocaleDateString('de-DE');
        const changes = {};
        for (let i = 0; i < list.length; i++) {
          toast(`Lade hoch: ${list[i].relPath} (${i + 1}/${list.length})`, 60000);
          if (list[i].size > 50 * 1048576) throw new Error(`${list[i].name} ist größer als 50 MB.`);
          await B().upload(p.ordner, cwd, list[i]);
          changes[(cwd ? cwd + '/' : '') + list[i].relPath] = { herkunft: info.herkunft, von: info.von, am };
        }
        await B().setMeta(p.ordner, changes);
        toast(`${list.length} ${list.length === 1 ? 'Datei' : 'Dateien'} hochgeladen.`);
      });
    }
    el.onclick = async e => {
      const t = e.target.closest('button'); if (!t) return;
      if (t.matches('[data-settings]')) return settings();
      if (t.matches('[data-login]')) return;
      if (t.dataset.cd !== undefined) { cwd = t.dataset.cd; draw(); return; }
      if (t.dataset.get) { try { download(await B().read(p.ordner, t.dataset.get), t.dataset.get.split('/').pop()); } catch (err) { toast(err.message); } return; }
      if (t.dataset.edit) {
        const m = meta[t.dataset.edit] || {};
        const r = await ask(`Herkunft von „${t.dataset.edit}“`, [{ name: 'herkunft', label: 'Herkunft oder Quelle', value: m.herkunft || '' }, { name: 'von', label: 'Abgelegt von', value: m.von || Ablage.LS.get('name', p.name) }], 'Speichern');
        if (r) guard(() => B().setMeta(p.ordner, { [t.dataset.edit]: Object.assign({}, m, r) }));
        return;
      }
      if (t.dataset.rm) {
        const isDir = t.dataset.type === 'dir';
        const ok = await ask(`${isDir ? 'Ordner' : 'Datei'} „${t.dataset.rm}“ löschen?`, [], 'Löschen', isDir ? 'Der Ordner wird mit allen enthaltenen Dateien gelöscht.' : 'Die Datei wird aus der Ablage entfernt.');
        if (ok) guard(async () => {
          await B().remove(p.ordner, t.dataset.rm);
          const gone = Object.keys(meta).filter(k => k === t.dataset.rm || k.startsWith(t.dataset.rm + '/'));
          if (gone.length) await B().setMeta(p.ordner, Object.fromEntries(gone.map(k => [k, null])));
          toast(`${isDir ? 'Ordner' : 'Datei'} gelöscht.`);
        });
      }
    };
    $('#b-mkdir').onclick = async () => {
      if (needWrite()) return;
      const r = await ask('Neuer Ordner' + (cwd ? ` in „${cwd}“` : ''), [{ name: 'name', label: 'Ordnername', hint: 'Tipp: mit Projektnummer beginnen, z. B. „A018_Angebot_Raumlot“, dann erscheint der Inhalt auf der Projektseite.' }], 'Ordner anlegen');
      if (r && r.name.trim()) guard(async () => { await B().mkdir(p.ordner, (cwd ? cwd + '/' : '') + r.name.trim().replace(/[\\/:*?"<>|]+/g, '_')); toast('Ordner angelegt.'); });
    };
    $('#b-files').onchange = e => { uploadFiles(e.target.files); e.target.value = ''; };
    $('#b-dir').onchange = e => { uploadFiles(e.target.files); e.target.value = ''; };
    $('#b-zip').onclick = () => guardRead(async () => {
      const pre = cwd ? cwd + '/' : '';
      const fs = items.filter(i => i.type === 'file' && i.path.startsWith(pre));
      if (!fs.length) return toast('In diesem Ordner liegen keine Dateien.');
      const entries = [];
      for (const f of fs) { toast(`Packe ${f.path} …`, 60000); entries.push({ name: f.path.slice(pre.length), data: new Uint8Array(await (await B().read(p.ordner, f.path)).arrayBuffer()) }); }
      download(makeZip(entries), `${p.ordner}${cwd ? '_' + cwd.replace(/\//g, '_') : ''}.zip`); toast('ZIP heruntergeladen.');
    });
    async function guardRead(fn) { try { await fn(); } catch (e) { toast(e.message, 6000); } }
    const drop = $('#drop');
    drop.ondragover = e => { e.preventDefault(); drop.classList.add('over'); };
    drop.ondragleave = () => drop.classList.remove('over');
    drop.ondrop = e => { e.preventDefault(); drop.classList.remove('over'); uploadFiles(e.dataTransfer.files); };
    el.addEventListener('ablage-changed', refresh);
    refresh();
  }

  // ------------------------------------------------------------------ Dialoge
  function ask(title, fields, okLabel, text) {
    const d = $('#dlg');
    d.innerHTML = `<form method="dialog" class="dlg"><h2>${esc(title)}</h2>${text ? `<p>${esc(text)}</p>` : ''}
      ${fields.map(f => `<label>${esc(f.label)}<input name="${f.name}" value="${esc(f.value || '')}" ${f.type ? `type="${f.type}"` : ''}>${f.hint ? `<small>${esc(f.hint)}</small>` : ''}</label>`).join('')}
      <div class="btnrow"><button value="cancel" class="btn" formnovalidate>Abbrechen</button><button value="ok" class="btn primary ${okLabel === 'Löschen' ? 'danger' : ''}">${esc(okLabel)}</button></div></form>`;
    return new Promise(res => {
      d.onclose = () => res(d.returnValue === 'ok' ? Object.fromEntries(fields.map(f => [f.name, d.querySelector(`[name="${f.name}"]`).value])) : null);
      d.returnValue = ''; d.showModal();
      const first = d.querySelector('input'); if (first) first.focus();
    });
  }
  function showText(path, txt) {
    const d = $('#dlg');
    d.innerHTML = `<form method="dialog" class="dlg wide"><h2>${esc(path.split('/').pop())}</h2><p class="muted small">${esc(path)}</p>
      <div class="md">${mdLite(txt)}</div><div class="btnrow"><button class="btn primary" value="ok">Schließen</button></div></form>`;
    d.onclose = null; d.showModal();
  }
  // Sehr kleiner Markdown-Darsteller für die Ergebnisse des Agenten
  function mdLite(md) {
    const inline = t => esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    const lines = md.replace(/\r/g, '').split('\n'); let out = '', i = 0;
    while (i < lines.length) {
      const l = lines[i];
      if (/^#{1,4} /.test(l)) { const n = l.match(/^#+/)[0].length; out += `<h${n + 1}>${inline(l.replace(/^#+ /, ''))}</h${n + 1}>`; i++; }
      else if (/^\s*\|/.test(l)) { const rows = []; while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(lines[i++]); out += '<div class="scroll"><table class="grid">' + rows.filter(r => !/^\s*\|[\s:|-]+\|\s*$/.test(r)).map((r, k) => '<tr>' + r.trim().replace(/^\||\|$/g, '').split('|').map(c => k === 0 ? `<th>${inline(c.trim())}</th>` : `<td>${inline(c.trim())}</td>`).join('') + '</tr>').join('') + '</table></div>'; }
      else if (/^\s*[-*] /.test(l)) { out += '<ul>'; while (i < lines.length && /^\s*[-*] /.test(lines[i])) out += `<li>${inline(lines[i++].replace(/^\s*[-*] /, ''))}</li>`; out += '</ul>'; }
      else if (/^\s*\d+\. /.test(l)) { out += '<ol>'; while (i < lines.length && /^\s*\d+\. /.test(lines[i])) out += `<li>${inline(lines[i++].replace(/^\s*\d+\. /, ''))}</li>`; out += '</ol>'; }
      else if (!l.trim()) i++;
      else { const para = []; while (i < lines.length && lines[i].trim() && !/^(#|\s*[-*] |\s*\||\s*\d+\. )/.test(lines[i])) para.push(lines[i++]); out += `<p>${inline(para.join(' '))}</p>`; }
    }
    return out;
  }
  function settings(reason) {
    const d = $('#dlg'), mode = Ablage.LS.get('mode', 'github'), C = Ablage.config;
    d.innerHTML = `<form method="dialog" class="dlg"><h2>Ablage-Einstellungen</h2>${typeof reason === 'string' ? `<p class="reason">${esc(reason)}</p>` : ''}
      <fieldset><legend>Wo die Datenablage gespeichert wird</legend>
        <label class="radio"><input type="radio" name="mode" value="github" ${mode === 'github' ? 'checked' : ''}> <span><b>GitHub-Repository ${esc(C.owner)}/${esc(C.repo)}</b><small>Gemeinsam für die ganze Gruppe. Jede Änderung ist ein Commit mit Datum, nachvollziehbar in der Historie.</small></span></label>
        <label class="radio"><input type="radio" name="mode" value="local" ${mode === 'local' ? 'checked' : ''}> <span><b>Nur dieser Browser</b><small>Ohne Anmeldung, aber nur auf diesem Gerät sichtbar.</small></span></label>
      </fieldset>
      <label>Adresse des Login-Dienstes<input name="worker" value="${esc(Ablage.LS.get('workerUrl', '') || '')}" placeholder="${esc(C.workerUrl || 'https://luftpfad-login.<name>.workers.dev')}" autocomplete="off">
        <small>${C.workerUrl ? 'Leer lassen, um die Adresse aus der Seite zu verwenden.' : 'Nach dem Einrichten des Cloudflare Workers hier eintragen (siehe worker/EINRICHTEN.md).'} Mit Login-Dienst braucht niemand ein GitHub-Token.</small></label>
      <div class="btnrow" style="margin-top:0"><button type="button" class="btn" id="w-check">Login-Dienst prüfen</button></div>
      <ul class="tok-result" id="w-result" aria-live="polite"></ul>
      <details ${Ablage.auth.enabled() ? '' : 'open'}><summary>Ohne Login-Dienst: eigenes GitHub-Token</summary>
      <label>GitHub-Token zum Hochladen<input name="token" type="password" value="${esc(Ablage.token())}" autocomplete="off" placeholder="github_pat_…">
        <small>Auf GitHub unter Settings › Developer settings › Fine-grained tokens anlegen, nur für dieses Repository, Berechtigung „Contents: Read and write“. Das Token bleibt nur in diesem Browser gespeichert.</small></label>
      <div class="btnrow" style="margin-top:0"><button type="button" class="btn" id="tok-check">Token prüfen</button></div>
      <ul class="tok-result" id="tok-result" aria-live="polite"></ul></details>
      <div class="btnrow"><button value="cancel" class="btn">Abbrechen</button><button value="ok" class="btn primary">Speichern</button></div></form>`;
    d.onclose = () => {
      if (d.returnValue !== 'ok') return;
      Ablage.setMode(d.querySelector('[name=mode]:checked').value);
      Ablage.setToken(d.querySelector('[name=token]').value.trim());
      const w = d.querySelector('[name=worker]').value.trim().replace(/\/+$/, '');
      if (w !== (Ablage.LS.get('workerUrl', '') || '')) { Ablage.LS.set('workerUrl', w); Ablage.LS.set('session', null); renderAccount(); }
      toast('Einstellungen gespeichert.');
      Ablage.status.data = null;
      route();
      Ablage.status.load(true).then(() => { paintStatus(); const sp = $('#st-panel'); if (sp) statusPanel(sp, PROJ[sp.dataset.id]); });
    };
    $('#w-check', d).onclick = async () => {
      const out = $('#w-result', d), w = d.querySelector('[name=worker]').value.trim().replace(/\/+$/, '') || Ablage.config.workerUrl;
      if (!w) { out.innerHTML = '<li class="bad">✗ Bitte zuerst die Adresse eintragen.</li>'; return; }
      out.innerHTML = '<li>Prüfe …</li>';
      try {
        const r = await (await fetch(w + '/')).json();
        out.innerHTML = r.ok ? `<li class="good">✓ Login-Dienst erreichbar, Repository ${esc(r.repo || '?')}</li>` : '<li class="bad">✗ Unerwartete Antwort.</li>';
      } catch (e) { out.innerHTML = `<li class="bad">✗ Nicht erreichbar (${esc(e.message)}). Adresse und ALLOWED_ORIGINS im Worker prüfen.</li>`; }
    };
    $('#tok-check', d).onclick = async () => {
      const t = d.querySelector('[name=token]').value.trim(), out = $('#tok-result', d);
      if (!t) { out.innerHTML = '<li class="bad">Bitte zuerst ein Token eintragen.</li>'; return; }
      out.innerHTML = '<li>Prüfe …</li>';
      const steps = await Ablage.checkToken(t);
      out.innerHTML = steps.map(([ok, txt]) => `<li class="${ok ? 'good' : 'bad'}">${ok ? '✓' : '✗'} ${esc(txt)}</li>`).join('');
    };
    d.returnValue = ''; d.showModal();
  }
  $('#open-settings').onclick = settings;

  // ------------------------------------------------------------------ Anmeldung
  function renderAccount() {
    const el = $('#account'); if (!el) return;
    const sb = $('#open-settings');
    if (!Ablage.auth.enabled()) { el.innerHTML = ''; if (sb) sb.hidden = false; return; }
    const u = Ablage.auth.user();
    // Mit Login braucht niemand die Ablage-Einstellungen; nur das Admin-Konto sieht sie noch
    if (sb) { sb.hidden = !(u && u.role === 'admin'); sb.textContent = 'Technische Einstellungen'; }
    el.innerHTML = u ? `<span>Angemeldet als <b>${esc(u.name)}</b>${u.role === 'admin' ? ' (Admin)' : u.person ? ` (Person ${u.person})` : ''}</span>
        <span class="acc-links">${u.role === 'admin' ? '<a href="#/admin">Benutzer verwalten</a>' : '<button class="link" id="acc-pw">Passwort ändern</button>'}<button class="link" id="acc-out">Abmelden</button></span>`
      : `<button class="btn small acc-in" data-login>Anmelden</button>`;
    const o = $('#acc-out'); if (o) o.onclick = () => { Ablage.auth.logout(); toast('Abgemeldet.'); };
    const pw = $('#acc-pw'); if (pw) pw.onclick = changePasswordDialog;
  }
  function loginDialog(reason) {
    const d = $('#dlg');
    d.innerHTML = `<form method="dialog" class="dlg" id="login-form"><h2>Anmelden</h2>${typeof reason === 'string' ? `<p class="reason">${esc(reason)}</p>` : ''}
      <label>Benutzername<input name="login" autocomplete="username" required autocapitalize="none"></label>
      <label>Passwort<input name="password" type="password" autocomplete="current-password" required></label>
      <p class="error" id="login-err" hidden></p>
      <div class="btnrow"><button value="cancel" class="btn" formnovalidate>Abbrechen</button><button value="ok" class="btn primary">Anmelden</button></div></form>`;
    const f = $('#login-form', d);
    f.onsubmit = async e => {
      if (e.submitter && e.submitter.value === 'cancel') return;
      e.preventDefault();
      const err = $('#login-err', d); err.hidden = true;
      try {
        const u = await Ablage.auth.login(f.login.value.trim(), f.password.value);
        d.close(); toast(`Angemeldet als ${u.name}.`);
      } catch (x) { err.textContent = x.message; err.hidden = false; }
    };
    d.onclose = null; d.returnValue = ''; d.showModal(); f.login.focus();
  }
  async function changePasswordDialog() {
    const r = await ask('Passwort ändern', [{ name: 'old', label: 'Bisheriges Passwort', type: 'password' }, { name: 'neu', label: 'Neues Passwort (mindestens 8 Zeichen)', type: 'password' }], 'Ändern');
    if (!r) return;
    try { await Ablage.auth.changePassword(r.old, r.neu); toast('Passwort geändert. Bitte mit dem neuen Passwort anmelden.', 5000); loginDialog(); }
    catch (e) { toast(e.message, 6000); }
  }
  window.addEventListener('luftpfad-auth', () => {
    renderAccount();
    Ablage.status.data = null;
    route();
    Ablage.status.load(true).then(() => { paintStatus(); const sp = $('#st-panel'); if (sp) statusPanel(sp, PROJ[sp.dataset.id]); });
  });

  // ------------------------------------------------------------------ Benutzerverwaltung (Admin)
  const pwGen = () => { const c = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789'; const a = crypto.getRandomValues(new Uint32Array(12)); return [...a].map(x => c[x % c.length]).join(''); };
  const loginOf = name => slug(name.split(' ')[0]).toLowerCase();
  async function admin() {
    const u = Ablage.auth.user();
    main.innerHTML = `<header class="page-head"><h1>Benutzer verwalten</h1>
      <p class="lead">Jede Person meldet sich mit eigenem Konto an und darf in ihrer eigenen Datenablage und im Projektstatus schreiben. Das Admin-Konto darf alles.</p></header>
      <section class="block" id="adm"></section>`;
    const el = $('#adm');
    if (!Ablage.auth.enabled()) { el.innerHTML = '<p class="hint">Der Login-Dienst ist noch nicht eingerichtet. Anleitung: worker/EINRICHTEN.md im Repository, danach die Adresse in den Ablage-Einstellungen eintragen.</p>'; return; }
    if (!u || u.role !== 'admin') { el.innerHTML = `<p class="hint">Diese Seite ist nur für das Admin-Konto. <button class="link" data-login>Als Admin anmelden</button></p>`; return; }
    let users = [];
    try { users = await Ablage.auth.users(); } catch (e) { el.innerHTML = `<p class="error">${esc(e.message)}</p>`; return; }
    const missing = S.personen.filter(p => !users.some(x => x.person === p.nr));
    el.innerHTML = `
      ${missing.length ? `<div class="suggest"><p>Für ${missing.map(p => esc(p.name)).join(', ')} gibt es noch kein Konto.</p>
        <button class="btn" id="adm-all">${missing.length} Konten mit Startpasswort anlegen</button></div>` : ''}
      <div id="adm-new-pw"></div>
      <h2>Konten <small>${users.length}</small></h2>
      <table class="grid"><thead><tr><th>Benutzername</th><th>Name</th><th>Person</th><th>Rolle</th><th><span class="vh">Aktionen</span></th></tr></thead><tbody>
        <tr><td><b>admin</b></td><td>Admin</td><td>–</td><td>Admin</td><td class="muted small">Passwort im Cloudflare-Dashboard (ADMIN_PASSWORD)</td></tr>
        ${users.map(x => `<tr><td><b>${esc(x.login)}</b></td><td>${esc(x.name)}</td><td>${x.person ? personLink(x.person) : '–'}</td><td>${x.role === 'admin' ? 'Admin' : 'Person'}</td>
          <td class="act"><button class="btn small" data-adm-pw="${esc(x.login)}">Neues Passwort</button><button class="btn small" data-adm-edit="${esc(x.login)}">Bearbeiten</button><button class="btn small danger" data-adm-del="${esc(x.login)}">Löschen</button></td></tr>`).join('')}
      </tbody></table>
      <h2>Konto anlegen</h2>
      <form class="adm-form" id="adm-form">
        <label>Benutzername<input name="login" required pattern="[a-z0-9._\-]{2,32}" placeholder="z. B. elena" autocapitalize="none"></label>
        <label>Name<input name="name" required placeholder="z. B. Elena Voss"></label>
        <label>Person<select name="person"><option value="">keine</option>${S.personen.map(p => `<option value="${p.nr}">${p.nr} – ${esc(p.name)}</option>`).join('')}</select></label>
        <label>Rolle<select name="role"><option value="person">Person</option><option value="admin">Admin</option></select></label>
        <label>Passwort<input name="password" value="${pwGen()}" minlength="8"></label>
        <button class="btn primary">Konto anlegen</button>
      </form>`;
    const showPw = list => { $('#adm-new-pw').innerHTML = `<div class="pwbox"><h3>Zugangsdaten zum Weitergeben</h3><p>Diese Passwörter werden nur jetzt angezeigt. Jede Person kann ihr Passwort danach unter „Passwort ändern“ selbst ändern.</p>
      <table class="grid"><thead><tr><th>Name</th><th>Benutzername</th><th>Passwort</th></tr></thead><tbody>${list.map(x => `<tr><td>${esc(x.name)}</td><td><code>${esc(x.login)}</code></td><td><code>${esc(x.password)}</code></td></tr>`).join('')}</tbody></table>
      <p class="small">Seite: ${esc(location.origin + location.pathname)}</p></div>`; };
    const allBtn = $('#adm-all');
    if (allBtn) allBtn.onclick = async () => {
      const made = [];
      try {
        for (const p of missing) {
          let login = loginOf(p.name); if (users.some(x => x.login === login)) login += p.nr;
          const password = pwGen();
          await Ablage.auth.saveUser({ login, name: p.name, person: p.nr, role: 'person', password });
          made.push({ name: p.name, login, password });
        }
      } catch (e) { toast(e.message, 6000); }
      await admin(); if (made.length) showPw(made);
    };
    $('#adm-form').onsubmit = async e => {
      e.preventDefault();
      const f = e.target, data = Object.fromEntries(new FormData(f));
      try { await Ablage.auth.saveUser(data); await admin(); if (data.password) showPw([{ name: data.name, login: data.login.toLowerCase(), password: data.password }]); toast('Konto gespeichert.'); }
      catch (x) { toast(x.message, 6000); }
    };
    el.onclick = async e => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.admPw) {
        const x = users.find(y => y.login === b.dataset.admPw), password = pwGen();
        const ok = await ask(`Neues Passwort für ${x.name}`, [{ name: 'password', label: 'Neues Passwort', value: password }], 'Speichern', 'Die bisherige Anmeldung dieser Person wird dabei beendet.');
        if (!ok) return;
        try { await Ablage.auth.saveUser({ ...x, password: ok.password }); await admin(); showPw([{ name: x.name, login: x.login, password: ok.password }]); } catch (er) { toast(er.message, 6000); }
      }
      if (b.dataset.admEdit) {
        const x = users.find(y => y.login === b.dataset.admEdit), f = $('#adm-form');
        f.login.value = x.login; f.name.value = x.name; f.person.value = x.person || ''; f.role.value = x.role; f.password.value = '';
        f.password.placeholder = 'leer lassen = Passwort bleibt'; f.querySelector('button').textContent = 'Änderungen speichern'; f.scrollIntoView({ behavior: 'smooth' }); f.name.focus();
      }
      if (b.dataset.admDel) {
        const ok = await ask(`Konto „${b.dataset.admDel}“ löschen?`, [], 'Löschen', 'Die Person kann sich danach nicht mehr anmelden. Ihre Dateien bleiben in der Ablage.');
        if (ok) { try { await Ablage.auth.deleteUser(b.dataset.admDel); await admin(); toast('Konto gelöscht.'); } catch (er) { toast(er.message, 6000); } }
      }
    };
  }
  renderAccount();

  boot();
})();
