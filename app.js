import { Client, GatewayIntentBits } from 'discord.js';

const client = new Discord.Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.DirectMessages
    ] 
});
client.once('ready', () => {
    console.log('Ready!');
});

client.on('interactionCreate', interaction => {
    console.log(interaction);
});

const swearWords = ["darn", "shucks", "frak", "shite"]; // Make sure all of the words are lowercased only.

client.on("messageCreate", message => {
    console.log(message);
    if (swearWords.some(word => message.content.toLowerCase().includes(word.toLowerCase()))) { // Lowercase the message content for better matching
        message.reply("Oh no you said a bad word!!!");
        // Or just do message.delete();
    }
});




client.login(process.env.DISCORD_TOKEN);