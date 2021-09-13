const config = require("../Data/config.json");
const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });

const { DisTube } = require("distube");
// const ytsr = require('ytsr');


const distube = new DisTube(client, { emitNewSongOnly: true, searchSongs: 0, leaveOnFinish: true });

module.exports = {
    name: "play",
    description: "Plays youtube song",
    aliases: ["sd"],
    execute: async (client, message, args) => {
        //const test = await ytsr('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley').items;

        //console.log("Test    :  " + test);
        message.channel.send(`PLays music`);
        const string = args.join(" ");
        console.log("Args unformatted: " + args);
        let result = args.toString().replace(/,/g, " ");
        console.log("Args Formatted: " + result);

        try {
            distube.voices.join(message.member.voice.channel);
            distube.play(message, string);
            message.channel.send(`Now playing search result for ${result}`);
        } catch (e) {
            message.channel.send(`Error: ${e}`);
        }
    },
};