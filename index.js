import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url';
import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000

// const __filename = fileURLToPath('public');
const __dirname = path.dirname('public');


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  

const allowed = "⌐◨-◨";
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
});
const twitterBotId = "713026372142104687";

client.once('ready', () => {
    console.log('Ready!');
});

client.on("messageCreate", message => {
    console.log("Message received: " + message.content);
    console.log("Message author id: " + message.author.id);
    console.log("Message author is bot? " + message.author.bot);
    // if (message.author.id !== twitterBotId && message.content !== allowed) {
    if (!message.author.bot && message.content !== allowed) {
        console.log("Message deleted: " + message.content);
        message.delete();
    }
});

client.login(process.env.DISCORD_TOKEN);