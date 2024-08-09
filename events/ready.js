const { ActivityType } = require('discord.js');

module.exports =  async (client) => {
  client.on("ready", () => {
      console.log(`🔥 Estou online em ${client.user.username}!`);
      client.vulkava.start(client.user.id);
      client.user.setActivity('Enstrosa Bot 2.0 Nova Era', { type: ActivityType.Listening });
  });

}