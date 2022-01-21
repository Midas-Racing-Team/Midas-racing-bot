const axios = require(`axios`)

module.exports = {
    name: `dog`,
    description: `random dog picture`,
    usage: `!dog`,
    execute: async(message, args) => {
        axios.get(`https://random.dog/woof.json`)
        .then((res) => {
            console.log(`RES:`, res.data.url)
            message.reply(res.data.url)
        })
        .catch((err) => {
            console.error(`ERR:`, err)
        })
    }
}