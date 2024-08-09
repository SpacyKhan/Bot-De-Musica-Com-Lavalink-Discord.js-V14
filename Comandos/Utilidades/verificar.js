const Discord = require("discord.js");
const { ButtonBuilder } = require("discord.js");

module.exports = {
  name: "verificar",
  description: "Verificar pra ganhar cargos",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    let embed = new Discord.EmbedBuilder()
    .setDescription("✅ | Clique no botão abaixo para realizar a verificação.")
    .setImage('https://cdn.discordapp.com/attachments/1236834628581589023/1237760323839328338/capa-minions-filme.png?ex=663cd1a1&is=663b8021&hm=433fc8773f6cef05b0c31e1051070340e3dd05c4284e92caa6db273dabe3a479&')
    .setTimestamp(); // Adiciona um timestamp para mostrar quando a embed foi criada

    let button = new Discord.ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("veri")
        .setLabel("Verificar")
        .setStyle(Discord.ButtonStyle.Success)
    );

    interaction.reply({ embeds: [embed], components: [button] });
  },
};

