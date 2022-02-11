const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('wio.db');
const moment = require('moment');
const config = require("../config.json")

exports.run = (client, message, args) => {
try {
let user = message.author
const embed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setColor("#0067f4")
        .setTitle(`Help Menu`)
        .setDescription(`Bot Prefix: **${config.prefix}** \nExample: **${config.prefix}dashboard** \nWebsite: [**Click**](${config.website_url})`)
        .addField(`Commands`, "`dashboard`, `monitors`, `account`, `new-monitor`, `invite`")
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
  name: 'help'
};
