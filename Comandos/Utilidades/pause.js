const  Discord = require("discord.js")

module.exports = {
  name: "pause",
  description: "to pause the music",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    const player = client.vulkava.players.get(interaction.guild.id);
    if (!player) {
      return interaction.reply("There aren't music on the queue");
    }

    player.pause(true); // Pause the music
    const embed = new Discord.EmbedBuilder()
      .setTitle("Paused Music")
      .setDescription("The current music was paused")
      .setColor("000000")
      .setTimestamp();

    interaction.reply({ embeds: [embed] });
  },
}

