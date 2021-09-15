module.exports = {
  name: "ping",
  description: "Gives ping and message ping",
  aliases: ["png"],
  category: ["misc"],
  execute: async (client, message) => {
    const msg = await message.reply(`Ping: ${client.ws.ping} ms.`);

    msg.edit(
      `Ping: ${client.ws.ping} ms. \nMessage Ping: ${
      msg.createdTimestamp - message.createdTimestamp
      } `
    );
  },
};
