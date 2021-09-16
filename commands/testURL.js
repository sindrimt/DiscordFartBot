const config = require("../Data/config.json");
//const fetch = require("node-fetch");

module.exports = {
    name: "test",
    description: "Responds with hello",
    aliases: ["yo"],
    category: ["misc"],
    execute: async (client, message) => {

        //import fetch from "node-fetch";
        const fetch = require("node-fetch");

        const api_url = "https://random-word-api.herokuapp.com/word?number=10";

        async function getapi(url) {
            const response = await fetch(url);

            var data = await response.json();
            console.log(data);
            if (response) {
                console.log("Succsess");
            }
            console.log(data);
        }
        getapi(api_url);
    },
};