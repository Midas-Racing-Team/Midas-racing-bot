const axios = require(`axios`)

module.exports = {
    name: `żart`,
    description: `random joke`,
    usage: `!żart`,
    execute: async(message, args) => {
        axios.get(`https://v2.jokeapi.dev/joke/Any?type=single`)
        .then((res) => {
            console.log(`RES:`, res.data.joke)
            message.reply(res.data.joke)
        })
        .catch((err) => {
            console.error(`ERR:`, err)
        })
    }
}