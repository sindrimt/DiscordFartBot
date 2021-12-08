const config = require("../Data/config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "bilde",
  description: "Responds with hello",
  aliases: ["sd"],
  category: ["misc"],
  execute: async (client, message) => {
    msg = message.member.user.avatar;
    user = message.member.user.username;
    console.log(msg);

    const { MessageEmbed } = require("discord.js");

    // inside a command, event listener, etc.
    const exampleEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(message.member.user.username)
      .setURL("https://discord.js.org/")
      .setAuthor(
        "Gamer!",
        "https://static.wikia.nocookie.net/leagueoflegends/images/d/dd/Rammus_Render.png/revision/latest?cb=20190112190938",
        "https://discord.js.org"
      )
      .setDescription("Her er din bild")
      .setThumbnail(message.member.user.avatarURL());

    message.channel.send({ embeds: [exampleEmbed] });
    //console.log(message.member.avatar);
    // message.channel.send(user + " Sitt bilde er : " + msg);
  },
};
