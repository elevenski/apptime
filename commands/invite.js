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
        .setTitle(`Invite Bot`)
        .setDescription(`[Click](https://discord.com/oauth2/authorize?client_id=842440497347690546&scope=bot&permissions=8)`)
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
  name: 'invite'
};