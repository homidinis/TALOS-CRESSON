//below are: slap, headpat, stab commands
const Discord = require('discord.js');
const client = new Discord.Client();


function slap(){ client.on('message', msg => {
  if (!msg.content.startsWith(prefix)){return;}

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  const slapTarget = msg.mentions.members.first();
      if (command === `slap`){
        msg.delete()
        if (!msg.mentions.users.size) {
          return msg.channel.send(`${msg.author} just slapped the air!`);}
       msg.channel.send(`${msg.author} just slapped the shit out of <@${slapTarget.id}>`+"!");
}})}

module.export = slap;