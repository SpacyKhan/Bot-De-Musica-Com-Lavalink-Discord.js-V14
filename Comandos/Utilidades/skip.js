const  Discord = require("discord.js")

module.exports = {
  name: "skip",
  description: "skip to the next music",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    const player = client.vulkava.players.get(interaction.guild.id);
    if (!player) {
      return interaction.reply("There aren't music on the queue");
    }

    player.skip(); // Pula para a próxima música na fila

    const embed = new Discord.EmbedBuilder()
      .setTitle("Skiped Music")
      .setDescription("The current music was skiped")
      .setColor("000000")
      .setTimestamp();

    interaction.reply({ embeds: [embed] });
  },
}

