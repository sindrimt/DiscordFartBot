const config = require("../Data/config.json");
const { distube } = require("./play");

module.exports = {
  name: "skip",
  description: "Skips song",
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
    }
  },
};
