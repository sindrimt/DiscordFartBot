const config = require("../Data/config.json");

const { distube } = require("./play");

module.exports = {
    name: "queue",
    description: "Gets queue",
    aliases: ["q"],
    category: ["music"],
    execute: async (client, message) => {

        const queue = distube.getQueue(message);
        //message.channel.send(`Queue: ${status(queue)}`); 
        try {
            const q = queue.songs.map((song, i) => `${i === 0 ? "Playing:" : `${i}.`} **${song.name.slice(0, 50)}** - \`${song.formattedDuration}\``).join("\n")
            message.channel.send(` **Server Queue**  - Total time : ${queue.formattedDuration}\n${q}`)
        } catch (error) {
            //console.log(error);
            message.channel.send(`Empty queue ${config.emotes.sob}`)
        }
    },
};