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
      }); 
}
