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

client.once('ready', () => {
    console.log('Ready!');
});

client.on("messageCreate", message => {
    if (message.content !== allowed) {
        message.delete();
    }
});

client.login(process.env.DISCORD_TOKEN);