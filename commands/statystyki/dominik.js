const axios = require(`axios`)

module.exports = {
    name: `dominik`,
    description: `random cat picture`,
    usage: `!cat`,
    execute: async(message, args) => {
        axios.get(`https://opensheet.elk.sh/1-rWg5Pc-WXBRpNeCbD0kWAZ9jzeEeO_hN5Y-avtnAzY/1`)
        .then((res) => {
            console.log(`RES:`, res.data[1])
            let Kierowca = res.data[1].Kierowca
            let Podium = res.data[1].Podium
            let Wygrane = res.data[1].Wygrane
            let SteamId = res.data[1].steamid64
            message.reply(`Wins: ${Wygrane}, Podiums: ${Podium}, SteamId: ${SteamId}`)
        })
        .catch((err) => {
            console.error(`ERR:`, err)
        })
    }
}