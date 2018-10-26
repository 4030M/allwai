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
client.on('ready', () => console.log('3 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN3);

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
client.on('ready', () => console.log('4 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN4);

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
client.on('ready', () => console.log('5 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN5);

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
client.on('ready', () => console.log('6 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN6);

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
client.on('ready', () => console.log('7 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN7);

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
client.on('ready', () => console.log('8 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN8);

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
client.on('ready', () => console.log('9 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN9);

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
client.on('ready', () => console.log('10 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN10);

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
client.on('ready', () => console.log('11 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN11);

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
client.on('ready', () => console.log('12 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN12);

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
client.on('ready', () => console.log('13 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN13);

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
client.on('ready', () => console.log('14 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN14);

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
client.on('ready', () => console.log('15 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN15);

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
client.on('ready', () => console.log('16 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN16);

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
client.on('ready', () => console.log('17 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN17);

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
client.on('ready', () => console.log('18 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN18);

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
client.on('ready', () => console.log('19 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN19);

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
client.on('ready', () => console.log('20 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN20);

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
client.on('ready', () => console.log('21 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN21);

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
client.on('ready', () => console.log('22 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN22);

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
client.on('ready', () => console.log('23 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN23);

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
client.on('ready', () => console.log('24 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN24);

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
client.on('ready', () => console.log('25 spam bot is ready!'));
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

client.login(process.env.BOT_TOKEN25);
