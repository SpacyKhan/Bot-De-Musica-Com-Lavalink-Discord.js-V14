const  Discord = require("discord.js")

module.exports = {
  name: "unpause",
  description: "unpause the music",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    const player = client.vulkava.players.get(interaction.guild.id);
    if (!player) {
      return interaction.reply("There aren't music on the queue");
    }

    player.pause(false); // Unpause the music

    const embed = new Discord.EmbedBuilder()
      .setTitle("Unpaused Music")
      .setDescription("The current music was unpaused")
      .setColor("000000")
      .setTimestamp();

    interaction.reply({ embeds: [embed] });
  },
}

