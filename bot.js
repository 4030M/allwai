if(!Discord) var Discord = require('discord.js');
if(!client) var client = new Discord.Client();
if(!prefix) var prefix = "#" ;

client.on('ready', async () => {
    let igni = ["#rep <@195088897234042880>","#rep <@498906131884670976>"]
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
var ServerID = "494264528461365249"; 
var ChannelID = "505109682592022538";
client.on('warn', console.warn);
client.on('error', console.error);
client.on('ready', () => console.log('1 spam bot is ready!'));
function timerFunc() {
  client.on('message', msg => {
      client.guilds.get(ServerID).channels.get(ChannelID); return 
  });
}
var timer = setTimeout(timerFunc, 1000);
client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === "#spam") {
message.author.sendMessage(1);

message.channel.send('#daily');

  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "spamsay") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.login(process.env.BOT_TOKEN);

client.on('ready', async () => {
    let igni = ["#rep <@195088897234042880>","#rep <@498906131884670976>"]
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
var ServerID = "494264528461365249"; 
var ChannelID = "505109682592022538";
client.on('warn', console.warn);
client.on('error', console.error);
client.on('ready', () => console.log('2 spam bot is ready!'));
function timerFunc() {
  client.on('message', msg => {
      client.guilds.get(ServerID).channels.get(ChannelID); return 
  });
}
var timer = setTimeout(timerFunc, 1000);
client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === "#spam") {
message.author.sendMessage(1);

message.channel.send('#daily');

  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "spamsay") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.login(process.env.BOT_TOKEN2);
