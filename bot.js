if(!Discord) var Discord = require('discord.js');
if(!client) var client = new Discord.Client();
if(!prefix) var prefix = "#";

  client.on('ready', async () => {
      let igni = ["#rep <@474730486787211265>","#rep <@474730486787211265>"]
  setInterval(() => {
client.channels.get(ChannelID).send(`${igni[Math.floor(Math.random() *igni.length)]}`);
},86400000);
});
  client.on('ready', async () => {
      let igni = ["#daily","#daily"]
  setInterval(() => {
client.channels.get(ChannelID).send(`${igni[Math.floor(Math.random() *igni.length)]}`);
},86400000);
});
var ServerID = "505795907347021834"; 
var ChannelID = "505795908005396493";
client.on('warn', console.warn);
client.on('error', console.error);
client.on('ready', () => console.log('lolo','\n','lolo','\n','lolo is ready!'));
client.on('disconnect', () => console.log('lolo had disconnected!'));
client.on('reconnecting', () => console.log('lolo is reconnecting...'));
function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) 
    });
}
var timer = setTimeout(timerFunc, 1000);
 client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "lolo") {
 message.author.sendMessage(1);

message.channel.send('#daily');

    }
});

const adminprefix = "#";
const devs = ['195088897234042880'];
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

const devs = ['195088897234042880'];
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

client.login(process.env.BOT_TOKEN2);
