if(!Discord) var Discord = require('discord.js');
if(!client) var client = new Discord.Client();
if(!prefix) var prefix = "a-";

function welcomeMessage(tag) {

var welcomeMessages = [`**Ꮃelcome Ꭲo Ꮪerver **__G__**reats ..** :Arabic_Flags: :movingheart:.`, `Welcome ${tag} To Ꮪerver Greats .. ♔`,

`Welcome to __Greats__ :Heart~5:`]

return welcomeMessages[Math.floor(Math.random()*welcomeMessages.length)]

}



client.on("guildMemberAdd", member => {

   var welc = new Discord.RichEmbed()

  .setColor('RANDOM')

  .addField("⇢", welcomeMessage(member), true)

   var welcome_channel = member.guild.channels.find(c => c.name === 'greats');

   message.channel.send(welc).catch(console.error)

});

const adminprefix = "a-";
const devs = ['195088897234042880'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'pl')) {
  client.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: | Playing : ${argresult}**`).then(message => {message.delete(6000)})
} else 
  if (message.content.startsWith(adminprefix + 'status')) {
client.user.setStatus(argresult)
    message.channel.sendMessage(`**:white_check_mark: | Set Status to : ${argresult}**`).then(message => {message.delete(6000)})
} else
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark: | Watching : ${argresult}**`).then(message => {message.delete(6000)})
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark: | Lisitening to : ${argresult}**`).then(message => {message.delete(6000)})
  } else 
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/allwai511")
    message.channel.sendMessage(`**:white_check_mark: | Streaming : ${argresult}**`).then(message => {message.delete(6000)})
}
});
client.login(process.env.BOT_TOKEN);
