module.exports = {
  name: "invite",
  description: "Invite link",
  aliases: ["inv"],
  execute: async (client, message) => {
    return await message.reply(
      "https://discord.com/api/oauth2/authorize?client_id=880738943908331520&permissions=0&scope=bot"
    );
  },
};
