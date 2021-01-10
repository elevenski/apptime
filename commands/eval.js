const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')

exports.run = (client, message, args) => {
//   if (message.author.id !== 'Here Admin ID') return;
  if (message.author.id !== 'Here Admin ID 1' && message.author.id !== 'Here Admin ID 2') return;
//   if (message.author.id !== 'Here Admin ID 1' && message.author.id !== 'Here Admin ID 2' && message.author.id !== 'Here Admin ID 3') return;
    if (args[0] === "client.token")
    return message.channel.send(':question:')
  if (args[0] === "message.channel.send(client.token)")
    return message.channel.send(':question:')
if (args[0] === "message.channel.sendMessage(client.token)")
    return message.channel.send(':question:')
  
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`:x: **ERROR!** \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eval'
};
