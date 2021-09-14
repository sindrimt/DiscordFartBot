const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });

const config = require("../Data/config.json");
const voiceDiscord = require("@discordjs/voice");
const { DisTube } = require("distube");
const ytsr = require('ytsr');
const { distube } = require("./play");

module.exports = {
    name: "queue",
    description: "Gets queue",
    aliases: ["q"],
    execute: async (client, message) => {

        const queue = distube.getQueue(message);
        //message.channel.send(`Queue: ${status(queue)}`); //TODO ADD ALLE VERDIENE I LISTA QUEUES
        const q = queue.songs.map((song, i) => `${i === 0 ? "Playing:" : `${i}.`} **${song.name.slice(0, 50)}** - \`${song.formattedDuration}\``).join("\n")
        message.channel.send(` **Server Queue**  - Total time : ${queue.formattedDuration}\n${q}`)
    },
};