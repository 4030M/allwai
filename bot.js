if(!Discord) var Discord = require('discord.js');
if(!client) var client = new Discord.Client();
if(!prefix) var prefix = "#";

const adminprefix = "#";
const devs = ['505762258857492490'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: | The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
} else 
  if (message.content.startsWith(adminprefix + 'setstatus')) {
client.user.setStatus(argresult)
    message.channel.sendMessage(`**:white_check_mark: | The Bot Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
} else
  if (message.content.startsWith(adminprefix + 'watch')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark: | The Watch Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`:white_check_mark: | The Listen Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
  } else 
if (message.content.startsWith(adminprefix + 'stream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk")
    message.channel.sendMessage(`**:white_check_mark: | The Stream Bot Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});
client.login(process.env.BOT_TOKEN);
