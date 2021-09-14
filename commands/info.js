const config = require("../Data/config.json");
module.exports = {
  name: "info",
  description: "Links to github",
  aliases: ["i"],
  execute: async (client, message) => {
    return await message.reply("https://github.com/sindrimt/DiscordFartingBot");
  },
};
