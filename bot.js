if(!Discord) var Discord = require('discord.js');
if(!client) var client = new Discord.Client();
if(!prefix) var prefix = "a-";

const adminprefix = "a-";
const devs = ['195088897234042880'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'pl')) {
  client.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: | ${argresult}**`).then(message => {message.delete(6000)})
} else 
  if (message.content.startsWith(adminprefix + 'status')) {
client.user.setStatus(argresult)
    message.channel.sendMessage(`**:white_check_mark: | ${argresult}**`).then(message => {message.delete(6000)})
} else
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark: | ${argresult}**`).then(message => {message.delete(6000)})
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`:white_check_mark: | ${argresult}**`).then(message => {message.delete(6000)})
  } else 
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/allwai511")
    message.channel.sendMessage(`**:white_check_mark: | ${argresult}**`).then(message => {message.delete(6000)})
}
});
client.login(process.env.BOT_TOKEN);
