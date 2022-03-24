const { MessageEmbed, Permissions } = require('discord.js');
const global = require('../../Config/global.json');
const db = require('quick.db');


module.exports = {
  name: 'kickall',
  description: 'Verify Profil',
  usage: '!verif',
  run: async (bot, message, args) => {
    const channel = member.guild.channels.cache.find(channel => channel.id === global.channelJoin);
    try {
    const permission = message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS);
    
    if (!permission)
        return message.reply(`❌ | Tu n'as pas la permission d'utiliser cette commande !`);

    const missingRole = new MessageEmbed().setDescription('Merci de preciser un identifiant de rôle').setColor('BLUE');

      if(!args[0]) return message.channel.send({embeds: [missingRole]});
      const roleId = args[0]
      const members = message.guild.roles.cache.get(roleId).members.map(m=>m.user.id);

      for(let i = 0; i < members.length; i++){
          const member = message.guild.members.cache.get(members[i]);
          member.kick().then(()=> {
            const successKick = new MessageEmbed().setDescription(`${member.user.username} a été kick`).setColor('GREEN');
            message.channel.send({embeds: [successKick]})
          }).catch(()=> {
            const errorKick = new MessageEmbed().setDescription(`Une erreur a eu lieu en tentant de kick ${member.user.username} ! ❌`).setColor('RED');
            channel.send({embeds: [errorKick]})
          })
      }
      console.log(members)

    }
    catch(err) {
        message.channel.send(`Une erreur a eu lieu \n ${err}`)
    }
  },
};