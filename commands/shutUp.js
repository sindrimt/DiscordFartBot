const config = require("../Data/config.json");
const voiceDiscord = require("@discordjs/voice");
const { distube } = require("./play");

module.exports = {
  name: "shutup",
  description: "Leaves channel",
<<<<<<< HEAD
  aliases: ["stfu", "die", "shutup", "fuckoff"],
  category: ["music"],
  execute: async (client, message) => {
    message.channel.send("Okay masta :disappointed_relieved: ");
=======
  aliases: ["stfu", "die", "fuckoff", "pissoffidiot", "jævel", "dø"],
  category: ["music"],
  execute: async (client, message) => {
    message.channel.send("Okay masta :disappointed_relieved: ");

>>>>>>> 2efbd8e9e54c6a0049f5630e27c2071584251797
    const queue = distube.getQueue(message);
    const channel = message.member.voice.channel;

    if (!channel) return;
    queue.stop();
<<<<<<< HEAD
    /*  const connection = voiceDiscord.joinVoiceChannel({
=======
    console.log("Log _ Stopped : Because of queue.stop (shutUp.js)");

    /*
    const connection = voiceDiscord.joinVoiceChannel({
>>>>>>> 2efbd8e9e54c6a0049f5630e27c2071584251797
      channelId: channel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

<<<<<<< HEAD
    connection.destroy();  */
=======
    connection.destroy(); */
>>>>>>> 2efbd8e9e54c6a0049f5630e27c2071584251797
  },
};
