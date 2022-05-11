// at the top of your file
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "help embed",
  execute(message) {
    // inside a command, event listener, etc.
    const exampleEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Help")
      .setURL("https://discord.js.org/")
      .setAuthor({
        name: "Help",
        iconURL: "https://i.imgur.com/AfFp7pu.png",
        url: "https://discord.js.org",
      })
      .setDescription("Some description here")
      .setThumbnail("https://i.imgur.com/AfFp7pu.png")
      .setImage("https://i.imgur.com/AfFp7pu.png")
      .setTimestamp()

    return message.channel.send(`@${message.author.username}` , {embed: exampleEmbed});
  },
};
