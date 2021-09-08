// node . for å kjøre
const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });

const config = require("./Data/config.json"); // Importerer export fra config.json
const prefix = config.prefix;

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const voiceDiscord = require("@discordjs/voice");

require("./util/handlers")(client);

client.on("messageCreate", async (message) => {
  console.log(message.content);
  function isCommand(command) {
    return !!message.content.toLowerCase().startsWith(prefix + command);
  }
});

client.on("messageCreate", async (message) => {
  var randomIntCheckValue = Math.floor(Math.random() * 10) + 1; // 0-3
  console.log(randomIntCheckValue);

  if (randomIntCheckValue > 2 /* && !message.content.includes("d") */) return; // 20% sjanse for at den spiller av lyd

  var randInt = Math.floor(Math.random() * 4) + 1; //TODO endre til array Resourses.length
  console.log("Dette er en ny Log " + message.content);
  const channel = message.member.voice.channel;

  if (!channel) return;

  const player = voiceDiscord.createAudioPlayer();
  const resource = voiceDiscord.createAudioResource(config.resources[randInt]);

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

/* function myFunction() {
  (min = 5), (max = 10);
  var rand = Math.floor(Math.random() * (max - min + 1) + min);
  console.log("Wait for " + rand + " seconds");

  setTimeout(myFunction, rand * 1000);
}

myFunction(); */

client.login(config.token);
