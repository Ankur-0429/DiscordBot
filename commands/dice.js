module.exports = {
    name: 'dice',
    description: 'return a random number from 1-6',
    execute(message, args){
        num = Math.floor(Math.random()*5) + 1
        message.channel.send('The dice rolled at ' + num);
    }
}