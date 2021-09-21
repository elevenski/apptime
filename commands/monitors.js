const Discord = require('discord.js');
const client = new Discord.Client();
const ly = require('wio.db');
const moment = require('moment');
exports.run = (client, message, args) => {
try {
let user = message.author

if(ly.fetch("linkler").filter(x => x.owner === user.id)) {
if(ly.fetch("linkler").filter(x => x.owner === user.id)[0]) {
        const embed = new Discord.MessageEmbed()
        .setColor("#0067f4")
        .setTitle(`Moitors`)
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .addField(`${(ly.fetch("linkler").filter(x => x.owner === user.id)[0]).name ||"-error-"}`, `**ID:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[0]).pointID ||"#-error-"}\n**URL:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[0]).url ||"-error-"}`)
        message.channel.send(embed)
} if(ly.fetch("linkler").filter(x => x.owner === user.id)[1]) {
        const embed = new Discord.MessageEmbed()
        .setColor("#0067f4")
        .addField(`${(ly.fetch("linkler").filter(x => x.owner === user.id)[1]).name ||"-error-"}`, `**ID:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[1]).pointID ||"#-error-"}\n**URL:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[1]).url ||"-error-"}`)
        message.channel.send(embed)
} if(ly.fetch("linkler").filter(x => x.owner === user.id)[2]) {
          const embed = new Discord.MessageEmbed()
        .setColor("#0067f4")
        .addField(`${(ly.fetch("linkler").filter(x => x.owner === user.id)[2]).name ||"-error-"}`, `**ID:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[2]).pointID ||"#-error-"}\n**URL:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[2]).url ||"-error-"}`)
        message.channel.send(embed)
} if(ly.fetch("linkler").filter(x => x.owner === user.id)[3]) {
          const embed = new Discord.MessageEmbed()
        .setColor("#0067f4")
        .addField(`${(ly.fetch("linkler").filter(x => x.owner === user.id)[3]).name ||"-error-"}`, `**ID:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[3]).pointID ||"#-error-"}\n**URL:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[3]).url ||"-error-"}`)
        message.channel.send(embed)
} if(ly.fetch("linkler").filter(x => x.owner === user.id)[4]) {
          const embed = new Discord.MessageEmbed()
        .setColor("#0067f4")
        .addField(`${(ly.fetch("linkler").filter(x => x.owner === user.id)[4]).name ||"-error-"}`, `**ID:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[4]).pointID ||"#-error-"}\n**URL:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[4]).url ||"-error-"}`)
        message.channel.send(embed)
} if(ly.fetch("linkler").filter(x => x.owner === user.id)[5]) {
          const embed = new Discord.MessageEmbed()
        .setColor("#0067f4")
        .addField(`${(ly.fetch("linkler").filter(x => x.owner === user.id)[5]).name ||"-error-"}`, `**ID:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[5]).pointID ||"#-error-"}\n**URL:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[5]).url ||"-error-"}`)
        message.channel.send(embed)
} if(ly.fetch("linkler").filter(x => x.owner === user.id)[6]) {
          const embed = new Discord.MessageEmbed()
        .setColor("#0067f4")
        .addField(`${(ly.fetch("linkler").filter(x => x.owner === user.id)[6]).name ||"-error-"}`, `**ID:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[6]).pointID ||"#-error-"}\n**URL:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[6]).url ||"-error-"}`)
        message.channel.send(embed)
} if(ly.fetch("linkler").filter(x => x.owner === user.id)[7]) {
          const embed = new Discord.MessageEmbed()
        .setColor("#0067f4")
        .addField(`${(ly.fetch("linkler").filter(x => x.owner === user.id)[7]).name ||"-error-"}`, `**ID:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[7]).pointID ||"#-error-"}\n**URL:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[7]).url ||"-error-"}`)
        message.channel.send(embed)
} if(ly.fetch("linkler").filter(x => x.owner === user.id)[8]) {
          const embed = new Discord.MessageEmbed()
        .setColor("#0067f4")
        .addField(`${(ly.fetch("linkler").filter(x => x.owner === user.id)[8]).name ||"-error-"}`, `**ID:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[8]).pointID ||"#-error-"}\n**URL:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[8]).url ||"-error-"}`)
        message.channel.send(embed)
} if(ly.fetch("linkler").filter(x => x.owner === user.id)[9]) {
          const embed = new Discord.MessageEmbed()
        .setColor("#0067f4")
        .addField(`${(ly.fetch("linkler").filter(x => x.owner === user.id)[9]).name ||"-error-"}`, `**ID:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[9]).pointID ||"#-error-"}\n**URL:** ${(ly.fetch("linkler").filter(x => x.owner === user.id)[9]).url ||"-error-"}`)
        message.channel.send(embed)

}
}

if(!ly.fetch("linkler").filter(x => x.owner === user.id)[0]) {
message.channel.send(`
You don't have any Monitors in system.
`)
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
  name: 'monitors'
};