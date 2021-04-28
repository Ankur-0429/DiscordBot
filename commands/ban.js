module.exports = {
    name: 'ban',
    description: 'prevents a person from typing for a certain amount of time',
    execute(message, args){
        if (args.length === 3){
            person = args[0];
            amount = args[1];
            units = args[2];

            if(message.author.username == ""){
                check = false
                message.delete();
                message.channel.send("Your opinion is terminated " + message.author.username)
            }           
        }
    }
}