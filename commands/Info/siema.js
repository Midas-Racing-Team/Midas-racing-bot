module.exports = {
    name: `siema`,
    description: `komenda do wyświetlania pingu`,
    usage: `!ping`,
    execute: async(message, args) => {
        message.channel.send(`Witam!`)
    }
}