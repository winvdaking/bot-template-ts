import { Client } from 'discord.js';
import ready from './src/events/ready';
import interactionCreate from './src/events/interactionCreate';
require("dotenv").config();

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(process.env.TOKEN).catch(e => console.error(e));