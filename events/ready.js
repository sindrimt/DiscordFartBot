module.exports = async (client) => {
<<<<<<< HEAD
  console.log("Bot is ready to go");
  client.user.setActivity(`In ${client.guilds.cache.size} Servers`, {
    type: "PLAYING",
  });
=======
  console.log("Bot is ready to go!");
  console.log(`Servers: ${client.guilds.cache.size}`);
>>>>>>> 2efbd8e9e54c6a0049f5630e27c2071584251797
};
