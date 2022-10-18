import { ChatInputApplicationCommandData, Client, BaseInteraction, CommandInteraction } from "discord.js";

export interface Command extends ChatInputApplicationCommandData {
    run: (client: Client, interaction: CommandInteraction) => void;
} 