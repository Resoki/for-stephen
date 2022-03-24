const { MessageEmbed } = require("discord.js")
const global = require('../Config/global.json');

module.exports = {
	name: 'guildMemberAdd',
	once: false,
	execute(member) {
    try {
        member.roles.add(global.roleKick)

        //Si luser a encore le role après 10 min
        const test = () => {
            if(member.roles.cache.has(global.roleKick))
                member.kick().catch(()=>console.log(`Une erreur a eu lieu ${err}`))
                console.log(`${member.user.username} a été kick !`)
            }
        setTimeout(()=> test(), 1000*600) // 10 minutes > 600.000 millisecondes
  
    } 
    catch(err) {
        //channel.send('Une erreur a eu lieu: ', err);
        console.log(err)
    }
	},
}