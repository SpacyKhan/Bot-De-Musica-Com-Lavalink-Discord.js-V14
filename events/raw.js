module.exports = (client) => client.on('raw', (packet) => client.vulkava.handleVoiceUpdate(packet));