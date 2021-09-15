const config = require("../Data/config.json");

module.exports = {
  name: "info",
  description: "Links to github",
  aliases: ["i"],
  category: ["misc"],
  execute: async (client, message) => {
    return await message.reply(`Made by **Sindrimt** \nLink to github: ${config.links.github}`);
  },
};
