const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: '핑챙혀늬',
    description: 'Replies with 돈갚아라',
  },
];

const rest = new REST({ version: '10' }).setToken("MTAzOTE0OTA2NjMxNzIxNzg4Mw.GvVf2A.BfHrS7VY124Q11UFDemmDLBGRTLduOvitTFPHs");

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("1039149066317217883"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === '핑챙혀늬') {
    await interaction.reply('돈갚아라');
  }
});

client.login("MTAzOTE0OTA2NjMxNzIxNzg4Mw.GvVf2A.BfHrS7VY124Q11UFDemmDLBGRTLduOvitTFPHs");

