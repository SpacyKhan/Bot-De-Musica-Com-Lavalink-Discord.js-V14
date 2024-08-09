const fs = require("fs");
const path = require("path");

module.exports = async (client) => {
  const SlashsArray = [];

  const loadFolder = async (folderPath) => {
    try {
      const files = await fs.promises.readdir(folderPath);
      for (const file of files) {
        const filePath = path.join(folderPath, file);
        const stats = await fs.promises.stat(filePath);
        if (stats.isDirectory()) {
          await loadFolder(filePath);
        } else if (file.endsWith(".js")) {
          const command = require(filePath);
          if (command.name) {
            client.slashCommands.set(command.name, command);
            SlashsArray.push(command);
          }
        }
      }
    } catch (error) {
      console.error(`Error loading commands: ${error}`);
    }
  };

  await loadFolder(path.join(__dirname, "..", "Comandos"));

  client.once("ready", async () => {
    client.guilds.cache.forEach((guild) => guild.commands.set(SlashsArray));
  });
};

