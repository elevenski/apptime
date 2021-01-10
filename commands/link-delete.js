const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')

exports.run = (client, message, args) => {
  let link = args[0]
  let linksahipi = args[1]
  //  if (message.author.id !== 'Here Admin ID') return;
  if (message.author.id !== 'Here Admin ID' && message.author.id !== 'Here Admin ID 2') return;
  //   if (message.author.id !== 'Here Admin ID' && message.author.id !== 'Here Admin ID 2' && message.author.id !== 'Here Admin ID 3') return;
if(!link) {
 return message.channel.send("You didn't fill out the link!");
}
  if(!linksahipi) {
 return message.channel.send("You didn't fill out the author!");
}
  if(!db.get("linkler").map(z => z.url).includes(link)) {
   return message.channel.send("Already in not the system!");
  } // db.add(`user.689169122604744833.sinir`,-1)
  db.set("linkler",db.get("linkler").filter(x => x.url != link))
db.add(`user.${linksahipi}.sinir`,-1)
    client.users.get(linksahipi).send(`The monitor named **${link}** has been removed from the system.`)
  client.channels.get("Here General Log Channel ID").send(`<@!${linksahipi}> deleted monitor. ${db.get("linkler").filter(x => x.owner === linksahipi).length}/10`)
  
  message.channel.send("Okay, Deleted!")
  

  
    }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'link-delete'
};
