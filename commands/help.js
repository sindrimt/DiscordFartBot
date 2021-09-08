const config = require("../Data/config.json");
const fs = require("fs");

module.exports = {
  name: "help",
  description: "List of commands",
  aliases: ["sd"],
  execute: async (client, message) => {
    const eventFiles = fs
      .readdirSync("commands/")
      .filter((file) => file.endsWith(".js"));

    let msg = await message.reply("pooup");

    let nameArray = [];
    let i = 0;
    let text = "";

    for (const file of eventFiles) {
      const event = require(`./${file}`);
      const { description, name } = event;
      console.log(description);

      // const eventName = file.slice(0, -3);

      nameArray.push(name);

      text += "  -!" + nameArray[i] + "- " + description + "\n";
      msg.edit("Here is a list of Commands: \n" + text);
      i++;
    }
    i = 0;
    console.log(nameArray);
  },
};
