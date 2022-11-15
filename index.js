require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({
  intents:[
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

client.login(process.env.TOKEN);

client.once('ready', () => {
  console.log('I am ready');
});

client.on('messageCreate', message => {
  if(message.content == 'ping') {
     message.reply('pong');
  }
});


