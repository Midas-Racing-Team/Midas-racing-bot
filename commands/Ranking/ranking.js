const Discord = require(`discord.js`);
const axios = require(`axios`);
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: `ranking`,
    aliases: ['rank'],
    description: `ranks`,
    usage: `!ranking`,
    execute: async(message, args) => {
        axios.get(`https://www.republicofsimracers.com/timetable/preq/905?race=897`)
        .then((res) => {
            console.log(`RES:`, res.data.data[0]);
            const ResultEmbed = new MessageEmbed()
            .setColor('#0549ff')
            .setTitle('Race 897 ranking')
            .setURL('https://www.republicofsimracers.com/')
            .addFields(
                { name: 'Msc', value: '1', inline: true },
                { name: 'Imię i Nazwisko', value: res.data.data[0].name , inline: true },
                { name: 'Czas', value: res.data.data[0].laptime, inline: true },
                //{ name: 'Strata', value: '+5:00:00', inline: true },
            )
            
        
        message.reply({ embeds: [ResultEmbed] });
        })
        .catch((err) => {
            console.error(`ERR:`, err)
        })
    }
}