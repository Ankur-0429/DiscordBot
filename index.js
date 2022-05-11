const Discord = require('discord.js');
const prefix = '$';
const fs = require('fs');
require('dotenv').config();
require("./keepAlive")

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('The bot is functioning!');
});

client.on("message", (message)=> {
    console.log(message.author.presence)
    const activity = message.author.presence.activities
    console.log(activity)
    if (activity !== null && activity.length >= 1) {
        print(activity[0].name)
        if (activity[0].name.toLowerCase() === "league of legends") {
            print("banning this person :(")
        }
    }
})

client.on('message', message => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // function isAdmin() {
    //     return message.member.roles.cache.find(r => r.name === 'Admin') != undefined
    // }
    
    if(command === 'inspire'){
        client.commands.get('inspire').execute(message)
    }

    if(command === 'help'){
        client.commands.get('help').execute(message)
    }

    // if(command === 'meme'){
    //     client.commands.get('meme').execute(message)
    //     message.delete({timeout : process.env.TimeOut}).catch(e => console.log(e))
    // }

    // if(command === 'deleterole' && isAdmin()){
    //     client.commands.get('deleteRole').execute(message,args)
    //     message.delete({timeout : process.env.Timeout}).catch(e => console.log(e))
    // }

    // if(command === 'bulkdelete' && isAdmin()){
    //     message.channel.bulkDelete(args[0]).catch(e => console.log(e))
    // }

    // if(command === 'setrole' && isAdmin()){
    //     client.commands.get('setRole').execute(message,args)
    //     message.delete({timeout : 5000}).catch(e => console.log(e))
    // }

    client.commands.get('dadBot').execute(message)
    client.commands.get('owoify').execute(message)

    // if(message.author.username === 'JJSlayer74'){
    //     message.delete()
    //         .then(message.channel.send("Your opinion is terminated " + message.author.username))
    //             .then(msg => msg.delete({timeout : process.env.TimeOut}))
    //             .catch(e => console.log(e)) 
    // }
});

client.login(process.env.Discord_Auth_Token);