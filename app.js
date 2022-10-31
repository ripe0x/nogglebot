import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        // GatewayIntentBits.Messages,
    ]
})
client.once('ready', () => {
    console.log('Ready!');
});

client.on('interactionCreate', interaction => {
    console.log(interaction);
});

client.on("messageCreate", message => {
    console.log(message);
});

client.login(process.env.DISCORD_TOKEN);