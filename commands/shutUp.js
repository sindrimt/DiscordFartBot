const config = require("../Data/config.json");
const voiceDiscord = require("@discordjs/voice");
const { distube } = require("./play");

module.exports = {
  name: "shutup",
  description: "Leaves channel",
  aliases: ["stfu", "die", "fuckoff", "pissoffidiot", "jævel", "dø"],
  category: ["music"],
  execute: async (client, message) => {
    message.channel.send("Okay masta :disappointed_relieved: ");

    const queue = distube.getQueue(message);
    const channel = message.member.voice.channel;

    if (!channel) return;
    queue.stop();

    /*
    const connection = voiceDiscord.joinVoiceChannel({
      channelId: channel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

    connection.destroy(); */
  },
};
