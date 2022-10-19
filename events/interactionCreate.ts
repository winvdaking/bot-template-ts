import { BaseInteraction, Client, CommandInteraction } from "discord.js";
import { Commands } from "../utils/commands";

export default (client: Client): void => {
  client.on("interactionCreate", async (interaction: BaseInteraction) => {
    if (interaction.isCommand() || interaction.isContextMenuCommand()) {
      await handleSlashCommand(client, interaction);
    }
  });
};

const handleSlashCommand = async (
  client: Client,
  interaction: CommandInteraction
): Promise<void> => {
  const slashCommand = Commands.find((c) => c.name === interaction.commandName);
  if (!slashCommand) {
    interaction.followUp({ content: "Une erreur est survenue..." });
    return;
  }

  await interaction.deferReply();

  slashCommand.run(client, interaction);
};
