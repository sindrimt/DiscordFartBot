const config = require("../Data/config.json");
module.exports = async (client, message) => {
  if (message.author.bot || !message.guild) return;

  const prefix = config.prefix;

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);

  const command = args.shift().toLowerCase();

  if (client.aliases.has(command))
    client.commands.get(client.aliases.has(command)).name;

  const commandFile = client.commands.get(command);

  if (!commandFile) return;

  try {
    commandFile.execute(client, message, args);
  } catch (error) {
    console.log(error);
    message.channel.send("something went wrong");
  }
};
