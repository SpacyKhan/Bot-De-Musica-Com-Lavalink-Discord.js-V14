const  Discord = require("discord.js")

module.exports = {
  name: "ping",
  description: "bot's latency",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    const player = client.vulkava.players.get(interaction.guild.id);
    if (!player) {
      return interaction.reply("There aren't music on the queue");
    }

    const ping = await player.ping(); // bot's latency

    const embed = new Discord.EmbedBuilder()
      .setTitle("Ping")
      .setDescription(`The value of latency is ${ping / 1000} ms`)
      .setColor("000000")
      .setTimestamp();

    interaction.reply({ embeds: [embed] });
  },
}

