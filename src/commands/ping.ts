import { CommandInteraction, Client } from "discord.js";
import { Command } from './command';

export const Ping: Command = {
    name: "ping",
    description: "Return the ping",
    run: async (client: Client, interaction: CommandInteraction) => {
        return await interaction.editReply({
            content: `*Latence* : **${Date.now() - interaction.createdTimestamp}ms**.\n*API Latence :* **${Math.round(client.ws.ping)}ms**.`,
        });
    }
};