const config = require("../Data/config.json");

module.exports = {
  name: "hello",
  description: "Responds with hello",
  aliases: ["yo"],
  execute: async (client, message) => {
    return message.channel.send("Hello!!! " + config.emotes.wink);
  },
};
