const { Vulkava } = require('vulkava');
const { EmbedBuilder } = require('discord.js');

module.exports = (client) => {
  client.vulkava = new Vulkava({
    nodes: [
      {
        id: 'Node 1',
        hostname: '0.0.0.0',
        port: 2333,
        password: 'SpacyOMlehor2525'
      }
    ],
    sendWS: (guildId, payload) => {
      client.guilds.cache.get(guildId)?.shard.send(payload);
      // Com eris:
      // client.guilds.get(guildId)?.shard.sendWS(payload.op, payload.d);
    }
  });

  client.vulkava.on('trackStart', (player, track) => {
    const channel = client.channels.cache.get(player.textChannelId);
    if (channel) {
      const embed = new EmbedBuilder()
        .setTitle('🎵 Now Playing')
        .setDescription(`\`${track.title}\``)
        .setColor('000000')
        .setTimestamp();

      channel.send({ embeds: [embed] });
    }
  });

  client.vulkava.on('queueEnd', (player) => {
    const channel = client.channels.cache.get(player.textChannelId);
    if (channel) {
      const embed = new EmbedBuilder()
        .setTitle('Queue Ended')
        .setDescription('The queue has ended!')
        .setColor('000000')
        .setTimestamp();

      channel.send({ embeds: [embed] });
    }
    player.destroy();
  });

  client.vulkava.on('playerDisconnect', (player, code, reason) => {
    const channel = client.channels.cache.get(player.textChannelId);
      if (channel) {
        const embed = new EmbedBuilder()
        .setTitle("Player Disconnected")
        .setDescription("The bot was disconnected.")
        .setColor("000000")
        .setTimestamp();

        channel.send({ embeds: [embed] });
      }
      player.destroy();
  })
  
  client.vulkava.on('error', (node, err) => {
    console.error(`[Vulkava] Error on node ${node.identifier}: ${err.message}`);
  });

  client.vulkava.on('nodeReconnect', (node) => {
    console.log(`Reconnecting to node ${node.identifier}...`);
  });

  client.vulkava.on('nodeDisconnect', (node, reason) => {
    console.warn(`[Vulkava] Node ${node.identifier} disconnected: ${reason}`);
  });

  client.vulkava.on('nodeConnect', (node) => {
    console.log(`[Vulkava] Node ${node.identifier} connected`);
  });
};
