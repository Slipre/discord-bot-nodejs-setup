module.exports = {
	name: 'ping',
	description: 'Check ping',
	async execute(Bot, interaction) {
		const msg = await interaction.reply({ content: "Pong!", fetchReply: true });
		return await interaction.editReply({ content: `Pong!\n🏓 : \`${msg.createdTimestamp - interaction.createdTimestamp}ms\`\n🌐 : \`${Bot.ws.ping}ms\`` });
	}
};