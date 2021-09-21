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
        .setTitle(`Dashboard`)
        .addField(`Last Announcements`, `**Content:** ${ly.fetch(`announcements.description`)} \n**Date:** ${ly.fetch(`announcements.date`)}`)
        .addField(`Your Stats (All Times)`, `**Connected:** ${ly.fetch(`logins.${user.id}`) || "0"} \n**Currently Monitors:** ${(ly.fetch("linkler").filter(x => x.owner === user.id).length) || "0"} \n**Total Requests:** ${(ly.fetch(`treq.${user.id}`)) || "0"}`)
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