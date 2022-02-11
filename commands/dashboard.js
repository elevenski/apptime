const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('wio.db');
const moment = require('moment');
exports.run = (client, message, args) => {
try {
let user = message.author
const embed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setColor("#0067f4")
        .setTitle(`Dashboard`)
        .addField(`Last Announcements`, `**Content:** ${db.fetch(`announcements.description`)} \n**Date:** ${db.fetch(`announcements.date`)}`)
        .addField(`Your Stats (All Times)`, `**Connected:** ${db.fetch(`logins.${user.id}`) || "0"} \n**Currently Monitors:** ${(db.fetch("linkler").filter(x => x.owner === user.id).length) || "0"} \n**Total Requests:** ${(db.fetch(`treq.${user.id}`)) || "0"}`)
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
  name: 'dashboard'
};
