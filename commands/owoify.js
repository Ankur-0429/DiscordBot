const owoify = require("owoify-js").default;

module.exports = {
  name: "owoify",
  description: "",
  execute(message) {
    if (message.author.bot) return;
    const args2 = message.content.trim();
    let owo = owoify(args2);

    if (
      message.author.username === "glute i us max"
    ) {
      message.delete();
      return message.channel.send(owo).catch((e) => console.log(e));
    }
  },
};
