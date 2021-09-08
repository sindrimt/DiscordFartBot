// node . for å kjøre
const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });

const config = require("./Data/config.json"); // Importerer export fra config.json
const prefix = config.prefix;
const resources = config.resources;
const token = config.token;

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const voiceDiscord = require("@discordjs/voice");

require("./util/handlers")(client);

/* client.on("messageCreate", async (message) => {
  console.log(message.content);
  function isCommand(command) {
    return !!message.content.toLowerCase().startsWith(prefix + command);
  }
}); */

client.on("messageCreate", async (message) => {

  if (message.author.bot || message.content.startsWith(prefix)) {
    return;
  }

  var randomIntCheckValue = Math.floor(Math.random() * 10) + 1; // 0-3
  console.log(`Message : \x1b[32m${message.content}\x1b[0m , Random Index : \x1b[36m${randomIntCheckValue}`);

  if (randomIntCheckValue > 2 /* && !message.content.includes("d") */) return; // 20% sjanse for at den spiller av lyd

  var randInt = Math.floor(Math.random() * config.resources.length - 1) + 1;
  const channel = message.member.voice.channel;

  if (!channel) return;

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
});

client.login(token);
