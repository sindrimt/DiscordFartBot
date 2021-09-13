const config = require("../Data/config.json");
const fs = require("fs");
const { MessageEmbed } = require('discord.js');

const prefix = config.prefix;
const luffy = config.images.luffy;
const github = config.links.github;

module.exports = {
  name: "help",
  description: "List of commands",
  aliases: ["sd"],
  execute: async (client, message) => {
    /* const eventFiles = fs
      .readdirSync("commands/")
      .filter((file) => file.endsWith(".js"));

    let msg = await message.reply("pooup");

    let nameArray = [];
    let i = 0;
    let text = "";

    for (const file of eventFiles) {
      const event = require(`./${file}`);
      const { description, name } = event;
      console.log(description);

      // const eventName = file.slice(0, -3);

      nameArray.push(name);

      text += "  -!" + nameArray[i] + "- " + description + "\n";
      msg.edit("Here is a list of Commands: \n" + text);
      i++;
    }
    i = 0;
    console.log(nameArray);
  }, */
    const exampleEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('List of commands')
      .setURL(github)
      .setAuthor(`${config.author}`, luffy, github)
      .setDescription(client.commands.map(cmd => `\`${prefix + cmd.name}\``).join(", "))
      .setTimestamp()
      .setFooter(`prefix: ${prefix} - Enjoy command`, luffy);

    message.channel.send({ embeds: [exampleEmbed] });

  }
};
