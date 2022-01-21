const axios = require(`axios`)

module.exports = {
    name: `fox`,
    description: `random fox picture`,
    usage: `!fox`,
    execute: async(message, args) => {
        axios.get(`https://randomfox.ca/floof/`)
        .then((res) => {
            console.log(`RES:`, res.data.image)
            message.reply(res.data.image)
        })
        .catch((err) => {
            console.error(`ERR:`, err)
        })
    }
}