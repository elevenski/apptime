const Discord = require('discord.js');
const client = new Discord.Client();
const ly = require('wio.db');
const moment = require('moment');
exports.run = (client, message, args) => {
try {
let user = message.author
        if(client.ws.ping > 300) {
const embed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setColor("#0067f4")
        .setTitle(`Status`)
        .addField(`Low Performance`, `${Math.round(client.ws.ping)}ms`)
        .addField(`More information`, `[Click](https://www.apptime.tech/status)`)
    message.channel.send(embed)
        } else {
const embed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setColor("#0067f4")
        .setTitle(`Status`)
        .addField(`Operational`, `${Math.round(client.ws.ping)}ms`)
        .addField(`More information`, `[Click](https://www.apptime.tech/status)`)
    message.channel.send(embed)
        }
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
  name: 'status'
};