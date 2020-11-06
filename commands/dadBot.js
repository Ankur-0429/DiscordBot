module.exports = {
    name: 'dadBot',
    description: "hi {} i'm dad",
    execute(message){
        if (message.author.bot) return;
        const args2 = message.content.trim().split(" ")
        for(let i = 0; i < args2.length; i++){
            if(args2[i].toLowerCase() == "i'm" || args2[i].toLowerCase() == 'im' && i+1 < args2.length){
                return message.channel.send(`Hi ${args2.slice(i+1).join(' ')}, I'm dad`);
            }
            if(args2[i].toLowerCase() == 'i' && args2[i+1].toLowerCase() == 'am' && i+2 < args2.length){
                return message.channel.send(`Hi ${args2.slice(i+2).join(' ')}, I'm dad`);
            } 
        }
    }
}
