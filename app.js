import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from "dotenv";
dotenv.config();

const allowed = "⌐◨-◨";
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
});

client.once('ready', () => {
    console.log('Ready!');
});

client.on("messageCreate", message => {
    if (message.content !== allowed) {
        message.delete();
    }
});

client.login(process.env.DISCORD_TOKEN);