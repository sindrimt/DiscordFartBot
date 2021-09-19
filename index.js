// node . for å kjøre

const Discord = require("discord.js");

const client = new Discord.Client({ intents: 32767 });

const config = require("./Data/config.json"); // Importerer export fra config.json
const prefix = config.prefix;
const resources = config.resources;
const token = config.token;

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = new Discord.Collection();

const voiceDiscord = require("@discordjs/voice");

require("./util/handlers")(client);

/* client.on("messageCreate", async (message) => {
  console.log(message.content);
  function isCommand(command) {
    return !!message.content.toLowerCase().startsWith(prefix + command);
  }
}); */

// DENNE spiller av en av lydene i config/resources randomly
// med en bestemt sjanse (randomIntCheckValue) :)
client.on("messageCreate", async (message) => {

  if (message.author.bot || message.content.startsWith(prefix)) {
    return;
  }

  //var randomIntCheckValue = Math.floor(Math.random() * 10) + 1; // 0-3
  console.log(`Message : ${message.content}`);

  //if (randomIntCheckValue > 0 /* && !message.content.includes("d") */) return; //! Endre til en verdi > 0 for å aktivere
  //                                                                               Gjør ingenting nå

/*   var randInt = Math.floor(Math.random() * config.resources.length - 1) + 1;
  const channel = message.member.voice.channel;

  if (!channel) return;

  const player = voiceDiscord.createAudioPlayer();
  const resource = voiceDiscord.createAudioResource(resources[randInt]);
 */
  // Joiner channel (Litt outdated men hey, works ;D)
 /*  const connection = voiceDiscord.joinVoiceChannel({
    channelId: channel.id,
    guildId: message.guild.id,
    adapterCreator: message.guild.voiceAdapterCreator,
  });

  player.play(resource);
  connection.subscribe(player);

  player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
    connection.destroy();
  }); */
});


client.login(token);
