const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({
  // Make sure you have 'GuildVoiceStates' intent enabled
  intents: ['GuildVoiceStates',  [3276799]]
});


client.slashCommands = new Discord.Collection();    
 
require("./Vulkava/vulkava")(client)
require("./events/raw")(client)
require("./handler")(client);
require("./events/ready")(client);
require("./events/interactionCreate")(client);



client.login(config.token);
