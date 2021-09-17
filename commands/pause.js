const { distube } = require("./play");

module.exports = {
    name: "pause",
    aliases: ["hold"],
    description: "Pauses music",
    category: ["music"],

    execute: async (client, message, args) => {
        const queue = distube.getQueue(message);
        if (!queue) return message.channel.send(` There is nothing in the queue right now!`);

        if (queue.paused) {
            distube.resume(message);
            return message.channel.send("Resumed the song for you :)");
        } else {
            distube.pause(message);
            message.channel.send("Paused the song for you :)");
        }
    }
}