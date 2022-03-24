const { MessageEmbed, Channel } = require("discord.js")
const global = require('../Config/global.json');
var cron = require('node-cron');

module.exports = {
	name: 'ready',
	once: true,
	execute(bot, member) {
    //Joue à >
    bot.user.setActivity(global.activityBot);
    bot.user.setStatus(global.statusBot == true ? 'online' : 'dnd');
	cron.schedule('* * * * *', () => {
		console.log('Bot ON');
	  });
	},
}