const config = require("../Data/config.json");
const { distube } = require("./play");

module.exports = {
    name: "skip",
    description: "Skips song",
    aliases: ["s"],
    category: ["music"],
    execute: async (client, message) => {

        const queue = distube.getQueue(message);
        if (queue.songs.length >= 2) {
            queue.skip();
        } else {
            message.channel.send(`Empty queue ${config.emotes.sob}`);
        }
    },
};

