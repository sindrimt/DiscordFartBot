const { distube } = require("./play");

module.exports = {
    name: "volume",
    aliases: ["v", "set", "set-volume"],
    category: ["music"],
    execute: async (client, message, args) => {
        const queue = distube.getQueue(message)
        //if (!queue) return message.channel.send(`| There is nothing in the queue right now!`)

        const volume = parseInt(args[0])

        if (isNaN(volume) || volume <= 0) return message.channel.send(`| Please enter a valid number!`)

        distube.setVolume(message, volume)
        message.channel.send(`| Volume set to \`${volume}\``)
    }
}