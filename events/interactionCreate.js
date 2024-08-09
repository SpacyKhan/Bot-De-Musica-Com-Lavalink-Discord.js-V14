const Discord = require('discord.js')
const {
  ActionRowBuilder,
  Events,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = async (client) => {
    client.on("interactionCreate", async (interaction) => {
      if (interaction.isCommand()) {
        if (interaction.type === Discord.InteractionType.ApplicationCommand) {
          const cmd = client.slashCommands.get(interaction.commandName);
      
          if (!cmd) return interaction.reply(`Error`);
      
          interaction["member"] = interaction.guild.members.cache.get(
            interaction.user.id
          );
          
          cmd.run(client, interaction);
        }

      } else if (interaction.isAutocomplete()) {
        const command = client.slashCommands.get(interaction.commandName);

        if (command) command.autocomplete(interaction, client);
    };    
    const array = [
      'aA0bB1',
      'cC2dD3',
      'eE4fF5',
      'gG6hH7',
      'iI8jJ9',
      'kK0lL1',
      'mM2nN3',
      'oO4pP5',
      'qQ6rR7',
      'sS8tT9',
      'uU0vV1',
      'wW2xX3',
      'yY4zZ5',
      '1aA0Bb',
      '2cC1Dd',
      '3eE2Ff',
      '4gG3Hh',
      '5iI4Jj',
      '6kK5Ll',
      '7mM6Nn'
    ];

    const codigoAleatorio = array[Math.floor(Math.random() * array.length)];

    if (interaction.isButton()) {
      if (interaction.customId === "veri") {
        const VerificarPessoas = new ModalBuilder({
          customId: "verificar",
          title: "Entrosa Oficial - Season 2"
        });
        const verif = new TextInputBuilder({
          customId: "verif",
          label: `Digite o codigo: ${codigoAleatorio}`,
          setPlaceholder: `${codigoAleatorio}`,
          style: TextInputStyle.Short
        });
      
        const primeiraAcao = new ActionRowBuilder().addComponents(verif);
      
        VerificarPessoas.addComponents(primeiraAcao);
      
        await interaction.showModal(VerificarPessoas);
      
        // Espera o modal ser submetido
        const filter = (interaction) => interaction.customId === "verificar";
      
        interaction.awaitModalSubmit({ filter, time: 30000 }).then(async (modalInteraction) => {
          // Captura o valor inserido pelo usuário no input do modal
          const codigoDigitado = modalInteraction.fields.getTextInputValue('verif');

          if (codigoAleatorio.toLocaleLowerCase() === codigoDigitado.toLocaleLowerCase())  {
            await interaction.member.roles.add("1236828536329994341");

            let embedAprovado = new Discord.EmbedBuilder()
            .setDescription(`✅ | <@${interaction.user.id}> cargo setado com sucesso!`)

           await modalInteraction.reply({ embeds: [embedAprovado], ephemeral: true })
          } 
          
        }).catch((error) => {
          // Lidar com possíveis erros
          console.error('Ocorreu um erro durante o processo:', error);
        });
      }
    }
      }); 
}