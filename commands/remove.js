const config = require("../Data/config.json");
const { distube } = require("./play");

module.exports = {
  name: "remove",
  description: "Removes song",
  aliases: ["r"],
  category: ["music"],
  execute: async (client, message, args) => {
    const queue = distube.getQueue(message);
    const queueLength = queue.songs.length;

    function removeSong(pos) {
      if (pos < 1 || pos >= queueLength) {
        message.channel.send("Out of range");
        return;
      }
      queue.songs.splice(pos - 1, 1);
    }
    removeSong(args);
  },
};
