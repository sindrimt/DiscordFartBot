module.exports = async (client) => {
  console.log("Bot is ready to go!");
  console.log(`Servers: ${client.guilds.cache.size}`);
};
