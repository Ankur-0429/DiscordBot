module.exports = {
    name: 'setRole',
    description: 'gives the role to a certain person or group',
    execute(message, args){
        tempargs = args.join(' ')

        if (tempargs.includes('[') && tempargs.includes(']')){
            discordUsers = message.mentions.users
            
            role = tempargs.slice(tempargs.indexOf(']')+2, tempargs.length)
            if(!role) return message.reply("Specify a role!")

            let gRole = message.guild.roles.cache.find(r => r.name == role);
            if(gRole === undefined) return message.reply("Couldn't find that role")

            discordUsers.each(user => message.guild.member(user).roles.add(gRole))
        }
        else{
            let rMember = message.guild.member(message.mentions.users.first()) || message.guild.member.get(args[0])
    
            if(!rMember) return message.reply("Couldn't find that user bro")

            let role = args.join().slice('23').replace(/,/g, " ")
            if(!role) return message.reply("Specify a role!")


            let gRole = message.guild.roles.cache.find(r => r.name == role);
            if(gRole === undefined) return message.reply("Couldn't find that role")

            rMember.roles.add(gRole)

            /*try{
                rMember.send(`You have gained the role of ${gRole.name}`)
            }
            catch(e){
                message.channel.send(`Congrats on gaining the role of ${gRole.name}. I tried to DM you but <@${rMember.id}> locked it like a baboon`)
            }*/
        }
    }
}