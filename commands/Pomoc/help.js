const Discord = require(`discord.js`);

module.exports = {
    name: `help`,
    description: `pomoc`,
    usage: `!help`,
    execute: async(message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor(`#63a5f1`)
        .setTitle(`Pomoc`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/836617575843889182/930819609328767016/unknown.png`)
        .setDescription(`**Opis i użycie każdej komendy**`)
        .addFields( {name: `Info`, value: `ping - !ping 
         siema - !siema` },
         {name: `pomoc`, value: `help - !help | wyświetla tą wiadomość`})

         .setTimestamp()
         .setFooter(message.author.tag)

        message.channel.send({ embeds: [embed] });
    }
}