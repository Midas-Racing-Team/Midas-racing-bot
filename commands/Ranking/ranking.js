const Discord = require(`discord.js`);
const axios = require(`axios`);
const { MessageEmbed } = require('discord.js');


    
module.exports = {
    name: `ranking`,
    aliases: ['ranking'],
    description: `ranks`,
    usage: `!ranking`,
    execute: async(message, args) => {
        axios.get(`https://www.republicofsimracers.com/timetable/preq/905?race=897`)
        .then((res) => {
            //console.log(`RES:`, res.data.data[0]);
           let resd = res;
        //We downloaded data, now create first message
                
        function morestats(n){

            for ( var i=1;i<25;i+=2){
                   pos1 = i;
                   pos2 = i + 1;
    if (typeof $morepositions === 'undefined') {
                  
       var $morepositions = { table: [{
                name: pos1.toString(),
                value:  pos2.toString(),
                inline: true
            },
            {
              name: resd.data.data[pos1].name,
              value: resd.data.data[pos2].name,
              inline: true
            },
            {
              name: resd.data.data[pos1].laptime,
              value: resd.data.data[pos2].laptime ,
              inline: true
            },]};
            console.log($morepositions);
            console.log(i);
            } else {
                $morepositions.table.push({
                    name: pos1.toString(),
                    value:  pos2.toString(),
                    inline: true
                })
                $morepositions.table.push({
                    name: resd.data.data[pos1].name,
                    value: resd.data.data[pos2].name,
                    inline: true
                })
                $morepositions.table.push({
                    name: resd.data.data[pos1].laptime,
                    value: resd.data.data[pos2].laptime ,
                    inline: true
                })
                
                
                    console.log($morepositions);
            }

    };
    return $morepositions.table;
        };
        

        $rankingMessage =[
        {
            name: "Msc",
            value:  '__ 1 __',
            inline: true
          },
          {
            name: "Imię i Nazwisko",
            value: "__" + res.data.data[0].name + "__",
            inline: true
          },
          {
            name: "Czas",
            value: "__" + res.data.data[0].laptime + "__",
            inline: true
          }, morestats(5) 
        
        
        ];
        
           



          message.channel.send({ embeds: [{
    color: 3447003,
    author: {
      name: "Author Name, it can hold 256 characters",
      icon_url: "https://i.imgur.com/lm8s41J.png"
    },
    title: "Race 897 ranking",
    url: "https://www.republicofsimracers.com/",
    fields: $rankingMessage,
    
   
    
  }]});
        })
        .catch((err) => {
            console.error(`ERR:`, err)
        })
    }
}

