const config = require("./config/config.js")

const { token, prefix } = config.token

const { Client, Intents, DiscordAPIError, Collection } = require('discord.js');     
// then you may define it like so    
client.commands = new Collection() 

const Client = new discord.Client({
    intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES ]
  })

client.once("ready", () =>
{
    console.log("Zostalem Wlaczony 100%/100%")

    client.user.setActivity("Ajzuk To Szef")
});


client.login(config.token)


 


