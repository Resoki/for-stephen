const { MessageEmbed, Permissions } = require('discord.js');
const global = require('../../Config/global.json');
const db = require('quick.db');


module.exports = {
  name: 'kickall',
  description: 'Verify Profil',
  usage: '!verif',
  run: async (bot, message, args) => {
    try {
    const permission = message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS);
    
    if (!permission)
        return message.reply(`❌ | Tu n'as pas la permission d'utiliser cette commande !`);

      if(!args[0]) return message.reply('Merci de preciser un ID de role');
      const roleId = args[0]
      const memberss = message.guild.roles.cache.get(roleId).members.map(m=>m.user.id);

      

      for(let i = 0; i < memberss.length; i++){
          const member = message.guild.members.cache.get(memberss[i]);
          console.log(member)
          message.reply(`Successfully kicked ${member.user.username}`)
           member.kick()
      }
      console.log(memberss)

    }
    catch(err) {
        message.channel.send(`Une erreur a eu lieu \n ${err}`)
    }
  },
};