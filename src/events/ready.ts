import { Client } from "discord.js";


export default (client: Client): void => {
    client.on("ready", async (client: Client) => {
        console.log(client.user?.username + " est allumé !");
    });
}