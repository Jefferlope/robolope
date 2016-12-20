const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.content === 'Jeff') {
    msg.reply('@Jefferlope#7754');
  }
});

client.login('MjU3MzI0NTAxODI4NzYzNjQ4.Czi_Rg.BFgKeUxcvJIa-qvpe-yRdYvnA5s');