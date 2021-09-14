const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });

const config = require("../Data/config.json");
const voiceDiscord = require("@discordjs/voice");
const { DisTube } = require("distube");
const ytsr = require('ytsr');
const { distube } = require("./play");

module.exports = {
    name: "skip",
    description: "Skips song",
    aliases: ["s"],
    execute: async (client, message) => {

        const queue = distube.getQueue(message);
        if (queue.songs.length >= 2) {
            queue.skip();
        } else {
            message.channel.send(`Empty queue ${config.emotes.sob}`);
        }
    },
};

