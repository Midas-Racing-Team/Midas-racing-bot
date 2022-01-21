module.exports = {
    name: `ping`,
    description: `komenda do wyświetlania pingu`,
    usage: `!ping`,
    execute: async(message, args) => {
        message.channel.send(`Pong`)
    }
}