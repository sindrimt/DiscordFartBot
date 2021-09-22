const config = require("../Data/config.json");
const voiceDiscord = require("@discordjs/voice");

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

module.exports = {
  name: "shutup",
  description: "Leaves channel",
  aliases: ["stfu", "die", "fuckoff", "pissoffidiot", "jævel", "dø"],
  category: ["music"],
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
