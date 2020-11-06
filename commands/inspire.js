
module.exports = {
    name: 'inspire',
    description: 'grabs image from inspirobot api',
    execute(message){
        const rp = require('request-promise');
        const options = {
            url: `https://inspirobot.me/api?generate=true`,
            json: true
        }

        rp(options)
            .then((data) => {
                message.channel.send(data);
            })
    }
}