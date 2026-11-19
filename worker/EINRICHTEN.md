# Login-Dienst einrichten (Cloudflare Worker, kostenlos)

Danach meldet sich jede Person mit eigenem Benutzernamen und Passwort auf der Webseite an. Niemand braucht mehr ein GitHub-Token. Dauer: etwa 15 Minuten, einmalig, nur durch die Person mit dem GitHub-Konto (ElReqanolo).

## 1. GitHub-Token für den Dienst anlegen

Dieses eine Token bekommt nur der Login-Dienst, niemand sonst.

1. github.com › Profilbild › **Settings** › **Developer settings** › **Personal access tokens** › **Fine-grained tokens** › **Generate new token**
2. Name: `Luftpfad Login-Dienst`, Expiration: **Custom**, zum Beispiel 31.03.2027
3. Repository access: **Only select repositories** › `ki_projekt_luftpfad`
4. Permissions › Repository permissions › **Contents: Read and write**
5. **Generate token** und das Token kopieren (beginnt mit `github_pat_`), gleich für Schritt 4 bereithalten

## 2. Cloudflare-Konto und Worker anlegen

1. Auf **dash.cloudflare.com** kostenlos registrieren (E-Mail bestätigen). Eine Domain braucht ihr nicht.
2. Links **Compute (Workers)** bzw. **Workers & Pages** › **Create** › **Start with Hello World!**
3. Name: `luftpfad-login` › **Deploy**
4. **Edit code** öffnen, den gesamten Beispielcode löschen und den Inhalt von
   [`worker/worker.js`](https://github.com/ElReqanolo/ki_projekt_luftpfad/blob/main/worker/worker.js) einfügen (auf GitHub oben rechts „Copy raw file“) › **Deploy**
5. Die Adresse des Workers notieren, sie sieht so aus: `https://luftpfad-login.<euer-name>.workers.dev`

## 3. Speicher für die Benutzerkonten (KV) anlegen

1. Links **Storage & Databases** › **KV** › **Create** (bzw. „Create namespace“), Name: `luftpfad-users`
2. Zurück zum Worker `luftpfad-login` › **Settings** › **Bindings** › **Add** › **KV namespace**
3. Variable name: `USERS` (genau so), Namespace: `luftpfad-users` › speichern

## 4. Einstellungen des Workers

Worker `luftpfad-login` › **Settings** › **Variables and Secrets** › **Add**. Diese sechs Einträge anlegen:

| Name | Typ | Wert |
|---|---|---|
| `GITHUB_TOKEN` | Secret | das Token aus Schritt 1 |
| `ADMIN_PASSWORD` | Secret | ein langes Passwort für das Admin-Konto (mindestens 12 Zeichen) |
| `SESSION_SECRET` | Secret | ein langer Zufallstext, z. B. 40 beliebige Buchstaben und Ziffern |
| `REPO` | Text | `ElReqanolo/ki_projekt_luftpfad` |
| `BRANCH` | Text | `main` |
| `ALLOWED_ORIGINS` | Text | `https://elreqanolo.github.io` |

Nach dem Speichern einmal **Deploy** klicken, falls Cloudflare danach fragt.

Test: Die Worker-Adresse im Browser öffnen. Es muss `{"dienst":"Luftpfad Login","ok":true,...}` erscheinen.

## 5. Webseite mit dem Dienst verbinden

Die Worker-Adresse in `assets/config.js` bei `workerUrl` eintragen (oder sie Claude schicken, dann trägt Claude sie ein):

```js
workerUrl: 'https://luftpfad-login.<euer-name>.workers.dev'
```

Nach ein bis zwei Minuten zeigt die Webseite links unten **Anmelden**.

## 6. Konten anlegen

1. Auf der Webseite **Anmelden** mit Benutzername `admin` und dem `ADMIN_PASSWORD`
2. Links unten **Benutzer verwalten** › **5 Konten mit Startpasswort anlegen**
3. Die angezeigte Tabelle mit Benutzernamen und Passwörtern an die fünf Personen weitergeben (sie wird nur einmal angezeigt). Jede Person kann ihr Passwort danach unter **Passwort ändern** selbst setzen.

## Was wer darf

| Konto | darf |
|---|---|
| Person (z. B. `elena`, Person 4) | in der eigenen Ablage `ablage/Person_4` Ordner anlegen, hochladen, löschen; Feedback und Haken bei allen Projekten |
| `admin` | alles davon in allen Ablagen und Benutzer verwalten |
| ohne Anmeldung | alles lesen und herunterladen |

Jede Änderung wird ein Commit mit dem Namen der Person. Ein Konto, das gelöscht oder dessen Passwort neu gesetzt wird, ist sofort abgemeldet.

## Kosten und Grenzen

Der kostenlose Cloudflare-Tarif erlaubt 100.000 Anfragen am Tag und Uploads bis 100 MB je Datei. Die Webseite begrenzt Uploads auf 50 MB. Wird ein Limit erreicht, schlägt nur die einzelne Anfrage fehl. Es entstehen keine Kosten, solange niemand selbst einen bezahlten Tarif wählt.

## Wenn etwas nicht geht

- **„Login-Dienst nicht erreichbar“**: Adresse in `config.js` prüfen; `ALLOWED_ORIGINS` muss genau `https://elreqanolo.github.io` sein (ohne Schrägstrich am Ende).
- **„GITHUB_TOKEN oder REPO ist im Worker nicht gesetzt“** bzw. **„SESSION_SECRET fehlt“**: Schritt 4 prüfen.
- **Fehler mit `USERS`**: Die KV-Bindung aus Schritt 3 fehlt oder heißt anders.
- **„Resource not accessible by personal access token“**: Beim Token aus Schritt 1 fehlt „Contents: Read and write“ oder das Repository.
- **Token abgelaufen**: neues Token anlegen und unter `GITHUB_TOKEN` ersetzen. Die Konten bleiben erhalten.
