const { EmbedBuilder } = require('discord.js')
const { DefaultQueue } = require('vulkava');

module.exports = class Queue extends DefaultQueue {
  constructor() {
    super();
  }

  peek() {
    return this.tracks[0];
  }

  removeTrackAt(index) {
    this.tracks.splice(index, 1);
  }

  getTrackAt(index) {
    return this.tracks[index];
  }

  getQueueDetails(pos, pos2) {
    const data = [];

    if (this.tracks.length === 0) {
      return new EmbedBuilder()
          .setDescription('There are no songs in the queue at the moment.')
  } else {
    for (; pos < pos2 && this.tracks[pos]; pos++) {
      const req = this.tracks[pos].requester;
      data.push(`${pos + 1}º - \`${this.tracks[pos].title}\` (Requested by: \`${req.username}#${req.discriminator}\`)`)
    }

    const embed = new EmbedBuilder()
      .setTitle("Music Queue")
      .setDescription(data.join('\n'))
      .setColor("000000")
      .setTimestamp()
      .setFooter({ text: `${this.tracks.length} tracks in total` });


    return embed;
  }
  }
}