module.exports = {
    name: `ping`,
    description: `komenda do wyświetlania pingu`,
    usage: `!ping`,
    execute: async(message, args) => {
        message.channel.send(`Calculating ping...`).then(resultMessage => {
            const ping = resultMessage.createdTimestaamp - message.createdTimestaamp
            
            message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms.`)
        })
    }
}