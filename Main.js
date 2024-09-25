require('dotenv').config();
const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');
const Bot = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages
	],
	partials: [
		Partials.Channel,
		Partials.Message
	]
});
Bot.commands = new Collection();
console.log("=== Bot_Name ===");
for(let handler of ["events", "slash_cmds"]) require(`./handlers/${handler}`)(Bot);
Bot.login(process.env.TOKEN);