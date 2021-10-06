const config = require("../Data/config.json");
const { distube } = require("./play");

module.exports = {
  name: "skip",
  description: "Skips song",
<<<<<<< HEAD
  aliases: ["s"],
  category: ["music"],
  execute: async (client, message) => {
    const queue = distube.getQueue(message);
    console.log(queue.songs.length);
    if (queue.songs.length >= 2) {
      queue.skip();
    } else {
      message.channel.send(`Empty queue ${config.emotes.sob} Quiet now`);
      queue.stop();
=======
  aliases: ["s", "next"],
  category: ["music"],
  execute: async (client, message) => {
    try {
      const queue = distube.getQueue(message);
      console.log(queue.songs.length);
      if (queue.songs.length >= 2) {
        queue.skip();
      } else {
        message.channel.send(
          `Empty queue ${config.emotes.sob}...aaaand leaving..`
        );
        queue.stop();
      }
    } catch (error) {
      console.log(error);
>>>>>>> 2efbd8e9e54c6a0049f5630e27c2071584251797
    }
  },
};
