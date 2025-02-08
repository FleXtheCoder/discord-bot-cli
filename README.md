# Discord Bot CLI

Ein einfaches CLI-Tool zur automatischen Erstellung eines Discord-Bot-Projekts mit allen wichtigen Bibliotheken.

## ✨ Funktionen
- Erstellt automatisch eine `index.js` und `.env` Datei mit den erforderlichen Platzhaltern.
- Installiert automatisch `discord.js@14` und weitere wichtige Pakete.
- Fragt den Benutzer nach Token und Guild ID im Terminal und speichert diese in `.env`.
- Kann global installiert und überall verwendet werden.

## 📚 Installation
Das Tool kann global installiert werden, sodass du es überall verwenden kannst:

```sh
npm install -g discord-bot-cli
```

## 🔄 Verwendung
Einfach den folgenden Befehl ausführen, um ein neues Discord-Bot-Projekt zu erstellen:

```sh
create-discord-bot
```

Das CLI stellt einige Fragen, um die `.env` Datei mit Token und Guild ID zu generieren.

## ✅ Voraussetzungen
- **Node.js** (mindestens Version 16.9.0)
- **npm oder yarn**
- **Git (optional für Installation via GitHub)**

## 💪 Manuelle Installation (Von GitHub Klonen)
Falls du das Projekt manuell installieren möchtest:

```sh
git clone https://github.com/FleXtheCoder/discord-bot-cli.git
cd discord-bot-cli
npm install
```

Dann kann das Tool über den folgenden Befehl getestet werden:

```sh
node index.js
```

## 🛠️ Konfiguration
Die erstellte `.env` Datei enthält die folgenden Platzhalter:

```
TOKEN=DeinBotTokenHier
GUILD_ID=DeineGuildIDHier
```

Ersetze die Werte entsprechend deiner Bot-Informationen.

## ✨ Features in Zukunft
- Unterstützung für **Slash Commands**
- Auswahl zwischen **CommonJS** und **ESM**
- Automatische **Projektstruktur-Generierung**

## 🌟 Beitrag leisten
Falls du Ideen oder Verbesserungen hast, erstelle gerne ein **Issue** oder einen **Pull Request** auf GitHub! 🚀

## 👥 Autoren
- **FleXtheCoder** - [GitHub](https://github.com/FleXtheCoder)

## 🛠 Lizenz
Dieses Projekt ist unter der **MIT-Lizenz** veröffentlicht. Fühle dich frei, es anzupassen und zu verbessern!

