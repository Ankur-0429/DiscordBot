module.exports = {
    name: 'dadBot',
    description: "hi {} i'm dad",
    execute(message){
        if (message.author.bot) return;
        const args2 = message.content.trim().split(" ")
        if(args2.length > 1){
            for(let i = 0; i < args2.length; i++){
                if(args2[i].toLowerCase() == "i'm" || args2[i].toLowerCase() == 'im' && i+1 < args2.length){
                    return message.channel.send(`Hi ${args2.slice(i+1).join(' ')}, I'm dad`).then(msg => msg.delete({timeout : 5000})).catch(e => console.log(e))
                }
                if(args2[i].toLowerCase() == 'i' && args2[i+1].toLowerCase() == 'am' && i+2 < args2.length){
                    return message.channel.send(`Hi ${args2.slice(i+2).join(' ')}, I'm dad`).then(msg => msg.delete({timeout : 5000})).catch(e => console.log(e))
                } 
            }
        }
        let rand = Math.round(Math.random()*30)
        if(rand == 5){
            return message.channel.send(`You would say ${message.content}`).then(msg => msg.delete({timeout : 5000})).catch(e => console.log(e))
        }
        if(rand == 3){
            return message.channel.send(`^^^ :100: :100: :100: LMAO`).then(msg => msg.delete({timeout : 5000})).catch(e => console.log(e)) 
        }
        if(rand == 1){
            return message.channel.send(`:hot_face:`).then(msg => msg.delete({timeout : 5000})).catch(e => console.log(e)) 
        }
    }
}


