const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Tatliş botumuz ${client.user.tag} sunucuya giriş yaptı ve aktif!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'merhaba') {
    msg.reply('**Merhaba! hoş geldin!** :heart:');
  }
  if (msg.content.toLowerCase() === 'youtube') {
    msg.reply('**Kanalıma abone olur musun? Videolarımı da beğenirsen çok mutlu olurum!** :tip: https://www.youtube.com/channel/UCiLfjPJNf7OXhHn7ngS07Zg :heart:');
  }
  if (msg.content.toLowerCase() === 'instagram') {
    msg.reply('**Bi follow çok görmezsiniz hıı** https://www.instagram.com/gokansaral/ :heart:');
  }
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('**as, naber?**');
  }
  if (msg.content.toLowerCase() === 'meow') {
    msg.channel.sendMessage('**MrRrrRrr gel pc pc**');
  }

});

client.login(process.env.NjI5MzA4MjI2MzgyNTk0MDQ4.XZYANA.ZSi8yDyQBT7votEl9so5ohHFYgg);
