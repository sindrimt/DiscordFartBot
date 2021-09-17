const { distube } = require("./play");

module.exports = {
    name: "jump",
    aliases: ["j"],
    description: "Jumps to number in queue",
    category: ["music"],

    execute: async (client, message, args) => {
        const queue = distube.getQueue(message);
        distube.jump(message, parseInt(args[0]))
            .catch(err => message.channel.send("Invalid song number."));
    }
}