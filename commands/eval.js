const Discord = require('discord.js');
const client = new Discord.Client();
const ly = require('wio.db')
const os = require('os');
const lyertia = require("wio.db")
const db = require('wio.db')
exports.run = async (client, message, args) => {
  
  if(!client.admin.includes(message.author.id)) return;
   let code = args.slice(0).join(" ")
 try {
        let ev = require('util').inspect(eval(code));
        if (ev.length > 1950) {
            ev = ev.substr(0, 1950);
        }
        let token = client.token.replace(/\./g, "\.")
        let re = new RegExp(token, 'g') 
        ev = ev.replace(re, "-");
        message.channel.send("**Input:**```js\n"+code+"```**Eval:**```js\n"+ev+"```")
        } catch(err) {
            message.channel.send('```js\n'+err+"```")
        }
 
    
}
    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};