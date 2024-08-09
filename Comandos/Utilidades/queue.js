const Discord = require("discord.js")


module.exports = {
  name: "queue",
  description: "You can see the current queue",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    const channel = interaction.member.voice.channel

    if (!channel) return

    try {
      const player = client.vulkava.players.get(interaction.guild.id);
      
      if (!player) return 

      const queueDetails = player.queue.getQueueDetails(0, 10);
      
  
      interaction.reply({embeds: [queueDetails]});
    } catch (e) {
      console.log(e.message)
    }
  },
}

