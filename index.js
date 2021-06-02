const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$';
const fs = require('fs');
client.disabledMembers = new Map();

const adminRoleID = 

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('The bot is functioning!');
});

client.on('message', message => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    function isAdmin() {
        return message.member.hasPermission("MANAGE_MEMBERS")
    }
    
    if(command === 'inspire'){
        client.commands.get('inspire').execute(message);
    }

    if(command === 'meme'){
        client.commands.get('meme').execute(message);
    }

    if(command === 'deleterole' && isAdmin()){
        client.commands.get('deleteRole').execute(message,args)
    }

    if(command === 'setrole'){
        client.commands.get('setRole').execute(message,args)
    }

    client.commands.get('dadBot').execute(message)

    /*if(message.author.name === 'RupturedSpirit' || message.author.username == "Stephenwb"){
        console.log(message.author.username)
        message.delete();
        message.channel.send("Your opinion is terminated " + message.author.username)
    }*/

});

client.login('');
