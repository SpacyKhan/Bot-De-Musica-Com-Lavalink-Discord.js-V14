const { ActivityType } = require('discord.js');

module.exports =  async (client) => {
  client.on("ready", () => {
      console.log(`🔥 Estou online em ${client.user.username}!`);
      client.vulkava.start(client.user.id);
      client.user.setActivity('Music Bot', { type: ActivityType.Listening });
  });

}
