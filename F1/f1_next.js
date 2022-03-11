const Discord = require(`discord.js`);
const axios = require(`axios`)

module.exports = {
    name: `f1_next`,
    description: `next f1 race`,
    usage: `!f1_next`,
    execute: async(message, args) => {
        axios.get(`http://ergast.com/api/f1/current/next.json`)
        .then((res) => {
            console.log(`RES:`, res.data.MRData.RaceTable.Races[0].raceName)
            let Racename = res.data.MRData.RaceTable.Races[0].raceName 
            let Data = res.data.MRData.RaceTable.Races[0].date
            let Runda = res.data.MRData.RaceTable.round
            let Sezon = res.data.MRData.RaceTable.season 
            let kraj = res.data.MRData.RaceTable.Races[0].Circuit.Location.country
            const embed = new Discord.MessageEmbed()
            .setColor(`#ffd700`)
            .setTitle(`${Racename}`)
            .setDescription(`**Runda: ${Runda}
Sezon: ${Sezon}
Data: ${Data}
Kraj: ${kraj}**`)
            .setThumbnail(`https://i.imgur.com/qLSzifW.jpg`)
            message.channel.send({ embeds: [embed] });
        })
        .catch((err) => {
            console.error(`ERR:`, err)
        })
    }
}