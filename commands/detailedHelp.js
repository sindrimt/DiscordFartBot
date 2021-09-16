const config = require("../Data/config.json");
const { MessageEmbed } = require('discord.js');

const prefix = config.prefix;
const luffy = config.images.luffy;
const github = config.links.github;

module.exports = {
    name: "details",
    description: "List of commands",
    aliases: ["d", "dtails"],
    category: ["misc"],
    execute: async (client, message) => {
        var misc = [];
        var music = [];

        // Filtrer ut commands med category misc
        client.commands.forEach((cmd => {
            if (!cmd.category.includes("misc")) return;
            misc.push(`\`${prefix + cmd.name + ": " + cmd.description}\``);
        }))
        // Filtrer ut commands med category music
        client.commands.forEach((cmd => {
            if (!cmd.category.includes("music")) return;
            music.push(`\`${prefix + cmd.name + ": " + cmd.description}\``);
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
