const config = require("../Data/config.json");
const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });

const { DisTube } = require("distube");
const ytsr = require('ytsr');

const { MessageEmbed } = require('discord.js');

const prefix = config.prefix;
const luffy = config.images.luffy;
const github = config.links.github;
const emotes = config.emotes;

const distube = new DisTube(client, { emitNewSongOnly: true, searchSongs: 0, leaveOnFinish: true });
//const que = new DisTube.Queue(distube, message, song, textChannel);

distube.on("addSong", (queue, song) => {
    queue.textChannel.send(
        `${config.emotes.notes} Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}. `
    )
    /* console.log("Duration " + queue.formattedDuration);
    console.log('Current queue:\n' + queue.songs.map((song, id) =>
        `**${id + 1}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``
    ).join("\n")); */

});

distube.on("playSong", (queue, song) => {
    const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(song.name)
        .setURL(song.url)
        .setAuthor(`by  ${song.user.username}`, song.user.avatarURL())
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


module.exports = {
    name: "play",
    description: "Plays youtube song",
    aliases: ["p"],
    category: ["music"],
    distube,
    execute: async (client, message, args) => {
        /* const queue = distube.getQueue(message);
        console.log(queue); */
        const string = args.join(" ");
        let result = args.toString().replace(/,/g, " ");
        const channel = message.member.voice.channel;

        if (!channel) {
            message.channel.send(`Join a voice channel ${emotes.wink}`);
            return;
        } 
        else {
            message.channel.send(emotes.magGlass + " Searching matches for : " + "`" + result + "`");
            //que.addToQueue(string, position);

            try {
                distube.voices.join(message.member.voice.channel);
                distube.play(message, string);
                //console.log(message.author.avatarURL());
            }
            catch (e) {
                //message.channel.send(`Join a voice channel ${emotes.wink}`);
                message.channel.send(`No search result ${emotes.sob}`);
                console.log(`Error ${e}`);
            }
    }
},
};