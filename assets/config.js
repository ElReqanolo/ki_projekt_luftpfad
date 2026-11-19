// Repository, in dem die Datenablage der Personen gespeichert wird.
// Auf GitHub Pages (<owner>.github.io/<repo>) wird beides automatisch erkannt.
window.LUFTPFAD_CONFIG = {
  owner: 'ElReqanolo',
  repo: 'ki_projekt_luftpfad',
  branch: 'main',
  ablagePfad: 'ablage',
  // Adresse des Login-Dienstes (Cloudflare Worker), z. B. 'https://luftpfad-login.<name>.workers.dev'.
  // Leer = ohne Login, Schreiben nur mit eigenem GitHub-Token.
  workerUrl: 'https://luftpfad-login.reqano.workers.dev'
};
