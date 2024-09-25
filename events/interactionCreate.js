module.exports = {
	run: async (Bot, interaction) => {
		if (!interaction.isChatInputCommand()) { return; }
		else {
			if (interaction.isChatInputCommand()) {
				if (!interaction.guild) { return await interaction.reply("Commands works only on server chat"); }
				const command = Bot.commands.get(interaction.commandName);
				if (!command) return;
				try { await command.execute(Bot, interaction); }
				catch (err) {
					console.error(err);
					return await interaction.reply({ content: "An error occurred with this command", ephemeral: true });
				}
			}
		}
	}
}