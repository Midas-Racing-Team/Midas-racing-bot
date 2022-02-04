const axios = require(`axios`)

module.exports = {
    name: `jarek`,
    description: `random cat picture`,
    usage: `!cat`,
    execute: async(message, args) => {
        axios.get(`https://opensheet.elk.sh/1-rWg5Pc-WXBRpNeCbD0kWAZ9jzeEeO_hN5Y-avtnAzY/1`)
        .then((res) => {
            console.log(`RES:`, res.data[4])
            let Kierowca = res.data[4].Kierowca
            let Podium = res.data[4].Podium
            let Wygrane = res.data[4].Wygrane
            message.reply(`Wins: ${Wygrane}, Podiums: ${Podium}`)
        })
        .catch((err) => {
            console.error(`ERR:`, err)
        })
    }
}