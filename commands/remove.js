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
<<<<<<< HEAD
      queue.songs.splice(pos - 1, 1);
=======
      queue.songs.splice(pos, 1);
>>>>>>> 2efbd8e9e54c6a0049f5630e27c2071584251797
    }
    removeSong(args);
  },
};
