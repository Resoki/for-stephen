const { MessageEmbed } = require("discord.js")
const global = require('../Config/global.json');

module.exports = {
	name: 'guildMemberAdd',
	once: false,
	execute(member) {
        const channel = member.guild.channels.cache.find(channel => channel.id === global.channelJoin);
    try {
        member.roles.add(global.roleKick)

        //Si luser a encore le role après 10 min
        const test = () => {
            if(member.roles.cache.has(global.roleKick)){
                member.kick()
                console.log(`${member.user.username} a été kick au bout des 10 minutes! ✅`)
               
                const successKick = new MessageEmbed().setDescription(`${member.user.username} a été kick au bout des 10 minutes ! ✅`).setColor('GREEN');
                channel.send({embeds: [successKick]})
              
            }
        setTimeout(()=> test(), 6600) // 10 minutes > 600.000 millisecondes
        }
  
    } 
    catch(err) {
        //channel.send('Une erreur a eu lieu: ', err);
        console.log(err)
    }
	},
}