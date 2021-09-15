const config = require("../Data/config.json");
const { MessageEmbed } = require('discord.js');

const prefix = config.prefix;
const luffy = config.images.luffy;
const github = config.links.github;

module.exports = {
  name: "help",
  description: "List of commands",
  aliases: ["h", "commands"],
  category: ["misc"],
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
    var misc = [];
    var music = [];

    // Filtrer ut commands med category misc
    client.commands.forEach((cmd => {
      if (!cmd.category.includes("misc")) return;
      misc.push(`\`${prefix + cmd.name}\``);
    }))
    // Filtrer ut commands med category music
    client.commands.forEach((cmd => {
      if (!cmd.category.includes("music")) return;
      music.push(`\`${prefix + cmd.name}\``);
    }))

    const embed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('List of commands')
      .setURL(github)
      .setAuthor(`${config.author}`, luffy, github)
      .setDescription("**Misc:** " + misc.join(", ") + "\n**Music:** " + music.join(", "))

      .setTimestamp()
      .setFooter(`prefix: ${prefix} - Enjoy command`, luffy);

    message.channel.send({ embeds: [embed] });

  }
};
