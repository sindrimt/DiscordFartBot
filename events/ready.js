module.exports = async (client) => {
  console.log("Bot is ready to go");
  client.user.setActivity(`In ${client.guilds.cache.size} Servers`, {
    type: "PLAYING",
  });
};
