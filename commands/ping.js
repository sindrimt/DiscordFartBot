const config = require("../Data/config.json");
module.exports = {
  name: "ping",
  description: "Gives ping and message ping",
  aliases: ["png"],
  execute: async (client, message) => {
    const msg = await message.reply(`Ping: ${client.ws.ping} ms.`);

    msg.edit(
      `Ping: ${client.ws.ping} ms. \nMessage Ping: ${
      msg.createdTimestamp - message.createdTimestamp
      } `
    );
  },
};
