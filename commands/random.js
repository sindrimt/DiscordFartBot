const voiceDiscord = require("@discordjs/voice");

const config = require("../Data/config.json");
const word = require("../Data/words.json");

module.exports = {
    name: "random",
    description: "Random word",
    aliases: ["rand"],
    category: ["music"],
    execute: async (client, message) => {
        const channel = message.member.voice.channel;

        const player = voiceDiscord.createAudioPlayer();

        const connection = voiceDiscord.joinVoiceChannel({
            channelId: channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });

        const randomWord = (word[Math.floor(Math.random() * word.length) + 1] + " " +
            word[Math.floor(Math.random() * word.length) + 1] + " " +
            word[Math.floor(Math.random() * word.length) + 1]);

        message.channel.send("!p " + randomWord);

    },
};
