const voiceDiscord = require("@discordjs/voice");
const config = require("../Data/config.json");

const resources = config.resources;

module.exports = {
  name: "sound",
  description: "Plays epic sound",
  aliases: ["sd"],
  execute: async (client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send("Join a voice channel :wink:");

    var randInt = Math.floor(Math.random() * config.resources.length - 1) + 1;

    const player = voiceDiscord.createAudioPlayer();
    const resource = voiceDiscord.createAudioResource(resources[randInt]);

    const connection = voiceDiscord.joinVoiceChannel({
      channelId: channel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

    player.play(resource);
    connection.subscribe(player);

    player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
      connection.destroy();
    });
  },
};
