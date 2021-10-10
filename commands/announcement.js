const Discord = require('discord.js');
const client = new Discord.Client();
const ly = require('wio.db');
const moment = require('moment');
exports.run = (client, message, args) => {
try {
  let linksahipi = args[0]
  if(!client.admin.includes(message.author.id)) return;

if(!args[0]) return message.channel.send("set or current?")

if(args[0] === "set") {
      let aciklama = args.join(" ")
      var annasil = aciklama.replace('set ','');
      message.channel.send(annasil);

    ly.set(`announcements.description`, annasil)
    ly.set(`announcements.date`, moment().format('lll'))
    message.channel.send("ok.")
}

if(args[0] === "current") {
    message.channel.send(`__Content__\n${ly.fetch(`announcements.description`)}\n\n__Date__\n${ly.fetch(`announcements.date`)}`)
}

  } catch (e) {
    console.log(e)
  }
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ann", "announcements"],
  permLevel: 4
};

exports.help = {
  name: 'announcement',
  description: 'Duyuru yapar',
  usage: 'announcements'
};