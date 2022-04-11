module.exports = {
    name: 'deleteRole',
    description: 'deletes the role to a certain person or group',
    execute(message, args){
        tempargs = args.join(' ')

        if (tempargs.includes('[') && tempargs.includes(']')){
            discordUsers = message.mentions.users
            
            role = tempargs.slice(tempargs.indexOf(']')+2, tempargs.length)
            if(!role) return message.reply("Specify a role!")

            let gRole = message.guild.roles.cache.find(r => r.name == role);
            if(gRole === undefined) return message.reply("Couldn't find that role")

            if(role != 'Admin') {discordUsers.each(user => message.guild.member(user).roles.remove(gRole))}
        }
        else{
            let rMember = message.guild.member(message.mentions.users.first())
    
            if(!rMember) return message.reply("Couldn't find that user bro")

            let role = args.join().slice('23').replace(/,/g, " ")
            if(!role) return message.reply("Specify a role!")


            let gRole = message.guild.roles.cache.find(r => r.name == role);
            if(gRole === undefined) return message.reply("Couldn't find that role")

            if(role != 'Admin') {rMember.roles.remove(gRole).catch(error => console.log(error))}
        }
    }
}