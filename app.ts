import { Client, GatewayIntentBits } from "discord.js";
import ready from "./events/ready";
import interactionCreate from "./events/interactionCreate";
import { config } from "./utils/config";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

try {
  ready(client);
  interactionCreate(client);
} catch (error) {
  console.log(error);
}

client
  .login(config.token)
  .then(() => {
    console.log("Bot is ready!");
  })
  .catch((error) => {
    console.log(error);
  });
