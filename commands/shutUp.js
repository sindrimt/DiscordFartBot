const config = require("../Data/config.json");
const voiceDiscord = require("@discordjs/voice");

module.exports = {
    name: "shutup",
    description: "Leaves channel",
    aliases: ["sd"],
    execute: async (client, message) => {
        message.channel.send("Okay masta :disappointed_relieved: ");
        const channel = message.member.voice.channel;

        if (!channel) return;

        const connection = voiceDiscord.joinVoiceChannel({
            channelId: channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });

        connection.destroy();
    },
};

