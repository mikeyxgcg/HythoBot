const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`help-`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.on('message', message => {
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
  if (!args[1]) {
message.channel.send("Usage: !bc [message]");
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(' Server', ${message.guild.name}, true)
          .addField(' Sender ', ${message.author.username}!${message.author.discriminator}, true)
          .addField(' Message ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.send(${m},{embed: bc});
      });
      const unknown = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle(':white_check_mark:| the messege is loading ')
      .addBlankField(true)
      .addField(':hotsprings:| i got sended to  ', message.guild.memberCount , true)
      .addField(':pencil:| the message ', args)
      .setColor('RANDOM')
      message.channel.sendEmbed(embed);
  }
  } else {
      return;
  }
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
