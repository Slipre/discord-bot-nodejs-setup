const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const rest = new REST( { version: '10'}).setToken(process.env.TOKEN);
const { readdirSync } = require('fs');
module.exports = async (Bot) => {
	const cmds = readdirSync('./slash_cmds').filter(file => file.endsWith('.js'));
	for(const file of cmds) {
		const command = require(`../slash_cmds/${file}`);
		Bot.commands.set(command.name, command);
	}
	await rest.put(Routes.applicationCommands(process.env.BotID), { body: Bot.commands })
	.then((data) => console.log(`${data.length} Slash commands registered.`))
	.catch((err) => { console.error("Commands not Registered!"); console.log(err); });
}