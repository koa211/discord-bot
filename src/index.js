require('dotenv').config();
const { Client, IntentsBitField, messageLink } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is booted.`);
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'hey') {
    interaction.reply('pluh');
  }
});

client.on('messageCreate', (msg) => {
    if (msg.author.bot) {
        return;
    }

    if (msg.content === "pluh") {
        msg.reply('r a t');
    }
});

client.login(process.env.TOKEN);
