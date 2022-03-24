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

    const missingRole = new MessageEmbed().setDescription('Merci de preciser un identifiant de rôle').setColor('BLUE');

      if(!args[0]) return message.channel.send({embeds: [missingRole]});
      const roleId = args[0]
      const members = message.guild.roles.cache.get(roleId).members.map(m=>m.user.id);

      for(let i = 0; i < members.length; i++){
          const member = message.guild.members.cache.get(members[i]);
          member.kick().then(()=> {
            const successKick = new MessageEmbed().setDescription(`Successfully kicked ${member.user.username}`).setColor('GREEN');
            message.channel.send({embeds: [successKick]})
          })
      }
      console.log(members)

    }
    catch(err) {
        message.channel.send(`Une erreur a eu lieu \n ${err}`)
    }
  },
};