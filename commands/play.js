const config = require("../Data/config.json");
const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });

const { DisTube } = require("distube");
const ytsr = require('ytsr');

const { MessageEmbed } = require('discord.js');

const prefix = config.prefix;
const luffy = config.images.luffy;
const github = config.links.github;

const distube = new DisTube(client, { emitNewSongOnly: true, searchSongs: 0, leaveOnFinish: true });

module.exports = {
    name: "play",
    description: "Plays youtube song",
    aliases: ["sd"],
    execute: async (client, message, args) => {
        const string = args.join(" ");
        let result = args.toString().replace(/,/g, " ");
        message.channel.send(`Searching matches for : ${result}`);

        try {
            distube.voices.join(message.member.voice.channel);
            distube.play(message, string);
            //console.log(message.author.avatarURL());
            distube.on("playSong", (queue, song) => {
                const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(song.name)
                    .setURL(song.url)
                    .setAuthor(`by  ${message.author.username}`, message.author.avatarURL())
                    // .setDescription(client.commands.map(cmd => `\`${prefix + cmd.name}\``).join(", "))
                    .setThumbnail(song.thumbnail)
                    .addFields(
                        { name: 'Channel', value: `${song.uploader.name}`, inline: true },
                        { name: 'Video length', value: `${song.formattedDuration}`, inline: true },
                        { name: 'Views', value: `${song.views}`, inline: true },
                    )
                    //.addField('Inline field title', 'Some value here', true)
                    .setTimestamp()
                    .setFooter(` - Enjoy Music :)`, luffy);

                queue.textChannel.send({ embeds: [embed] })
            });
        } catch (e) {
            message.channel.send(`Error: ${e}`);
        }
    },
};