const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "musichelp",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {

    let helpEmbed = new MessageEmbed()
      .setTitle(`Music Commands`)
      .setDescription("`clip`, `clips`, loop`, `lyrics`, `move`, `nowplaying`, `pause`, `play`, `playlist`, `queue`, `remove`, `resume`, `search`, `shuffle`, `skip`, `skipto`, `stop`")
      .setColor("#F8AA2A");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
