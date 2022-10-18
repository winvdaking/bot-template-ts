import { Client } from "discord.js";
import { Commands } from '../commands/commands';

export default (client: Client): void => {
    client.on("ready", async (client: Client) => {

        await client.application?.commands.set(Commands);

        console.log(client.user?.username + " est allumé !");
    });
}