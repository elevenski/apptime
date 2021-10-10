const Discord = require('discord.js');
const client = new Discord.Client();
const ly = require('wio.db');
const moment = require('moment');
exports.run = (client, message, args) => {
try {
let user = message.author
const embed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setColor("#0067f4")
        .setTitle(`${ly.fetch(`account.${user.id}.name`) || "Anonymous"} (${user.username})`)
        .addField(`ID`, user.id)
        .addField(`Email`, "local@apptime.tech")
        .addField(`Client`, "Discord")
        .setImage(`${ly.fetch(`account.${user.id}.avatar`) || "https://i.ibb.co/8mXdWsM/user2.png"}?size=2048`)
    message.channel.send(embed)
  } catch (e) {
    console.log(e)
  }
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'account'
};