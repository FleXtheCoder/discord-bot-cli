#!/usr/bin/env node

const chalk = require("chalk");


const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

(async () => {
  console.log("\n🚀 Willkommen zum Discord-Bot-Setup!\n");

  const projectName = await askQuestion("📂 Wie soll der Projektordner heißen? (Standard: my-discord-bot): ");
  const botToken = await askQuestion("🔑 Gib deinen Discord-Bot-Token ein: ");
  const guildID = await askQuestion("🏠 Gib die Guild-ID ein: ");

  rl.close();

  const finalProjectName = projectName.trim() || "my-discord-bot";
  const projectPath = path.join(process.cwd(), finalProjectName);


  if (fs.existsSync(projectPath)) {
    console.log("⚠️ Der Ordner existiert bereits. Wähle einen anderen Namen.");
    process.exit(1);
  }


  fs.mkdirSync(projectPath);
  console.log("📂 Projektverzeichnis erstellt.");


  execSync(`npm init -y`, { cwd: projectPath, stdio: "inherit" });


  console.log("📦 Installiere benötigte Bibliotheken...");
  execSync(`npm install discord.js @discordjs/rest discord-api-types dotenv axios chalk fs path`, { cwd: projectPath, stdio: "inherit" });
  console.log("✅ Bibliotheken installiert.");


  const indexJsContent = `require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(\`✅ Bot ist eingeloggt als \${client.user.tag}\`);
});

client.on('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.reply('Pong!');
    }
});

client.login(process.env.TOKEN);
`;

  fs.writeFileSync(path.join(projectPath, "index.js"), indexJsContent);
  console.log("✅ index.js erstellt.");

 
  const envContent = `TOKEN=${botToken}
GUILD_ID=${guildID}
`;

  fs.writeFileSync(path.join(projectPath, ".env"), envContent);
  console.log("✅ .env-Datei erstellt.");

 
  console.log(chalk.green("\n🎉 Dein Discord-Bot-Projekt wurde erfolgreich erstellt!"));
  console.log("📌 Befehle zur Nutzung:");
  console.log(`   cd ${finalProjectName}`);
  console.log("   npm start (nachdem du dein Token in .env ergänzt hast)");
})();
