const Discord = require("discord.js")
const Queue = require('../../Vulkava/queue');

module.exports = {
  name: "play-yt",
  description: "Plays music from Youtube, Spotify and SoundClound!",
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: "query",
      description: "Enter the URL of the SoundClound, Youtube and Spotify",
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
      autocomplete: true
    },
  ],
  run: async (client, interaction) => {

    const channel = interaction.member.voice.channel

    if (!channel) return

    const track = interaction.options.getString("query");

  try {
    const res = await client.vulkava.search(track);


    if (res.loadType === "LOAD_FAILED") {
      return interaction.reply(
        `:x: Load failed. Error: ${res.exception.message}`
      );
    } else if (res.loadType === "NO_MATCHES") {
      return interaction.reply(":x: No matches!");
    }

    // Creates the audio player
    const player = client.vulkava.createPlayer({
      guildId: interaction.guild.id,
      voiceChannelId: interaction.member.voice.channelId,
      textChannelId: interaction.channel.id,
      selfDeaf: true,
      queue: new Queue()
    });

    player.connect(); // Connects to the voice channel

    if (res.loadType === "PLAYLIST_LOADED") {
      for (const track of res.tracks) {
        track.setRequester(interaction.user);
        player.queue.add(track);
      }

      interaction.reply(`Playlist \`${res.playlistInfo.name}\` loaded!`);
    } else {
      const track = res.tracks[0];
      track.setRequester(interaction.user);

      player.queue.add(track);
      interaction.reply(`Queued \`${track.title}\``);
    }

    if (!player.playing) player.play();

  } catch (error) {
    console.log(error.message)
  }
   
  },
  autocomplete: async (interaction, client) => {
    const query = interaction.options.getString('query')

    if (query.length > 25) {
        return
    }

    client.vulkava.search(query, 'track', 9)
    .then(result => {
      const tracks = result.tracks; // Acessa a lista de faixas dentro do objeto retornado

      if (tracks.length === 0) {
        // Lida com a situação em que nenhuma faixa é encontrada
        return console.log('No tracks found');
      }

      const choices = tracks.map(track => track.title); // Cria um array com os títulos das faixas
      // interaction.respond espera um array de objetos com { name, value }
      interaction.respond(choices.map(choice => ({ name: choice, value: choice })));
    })
    .catch(e => console.log(e));
}
};
