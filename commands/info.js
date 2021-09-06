const config = require("../Data/config.json");
module.exports = {
  name: "info",
  description: "Links to github",
  aliases: ["sd"],
  execute: async (client, message) => {
    return await message.reply("https://github.com/sindrimt/FartingBot");
  },
};
