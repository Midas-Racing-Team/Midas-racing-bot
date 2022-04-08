const Discord = require(`discord.js`);
const axios = require(`axios`);
const {
    MessageEmbed
} = require('discord.js');

// CONFIG:

let resultlink = 'https://www.republicofsimracers.com/timetable/live-data/898?server=1';
let resulttitle = 'OPEN Series S4: Road America';
let resulturl = 'https://www.republicofsimracers.com/event/open-series-s4/road-america?server=1&racenum=q'; //This URL redirect from title button
let resulticon = 'https://www.republicofsimracers.com/storage/img/tracks/maps/6GCcQIkd4cpmJpblw0YI5MYrpzN5YIlKQhgcbmdN.webp';
let embedcolor = 3147003;

// END OF CONFIG

module.exports = {
    name: `r`,
    aliases: ['r'],
    description: `ranks`,
    usage: `!r`,
    execute: async (message, args) => {
        axios.get(resultlink)
            .then((res) => {
                

                let resd = res; //Make result accessibility for all functions
                var messagessend = 0;
                // Calculate positions to show
                var countpositions = 0;
                 for (key in resd.data) {
                    countpositions++
                     var highestposition = countpositions;
                    
                }

                Howmanymessages = Math.ceil(highestposition / 15); //Every message can show 15 positions


                console.log("Have " + highestposition + " racers to show.");
                console.log("And " + Howmanymessages + " messages to send.");
                

                //Create first message with 'table' headers

                $firstmessage = [{
                        name: "Msc",
                        value: "__" + resd.data[0].finishposition + "__",
                        inline: true
                    },
                    {
                        name: "Imię i Nazwisko",
                        value: "__" + resd.data[0].name + "__",
                        inline: true
                    },
                    {
                        name: "Czas",
                        value: "__" + resd.data[0].laptimebest + "__",
                        inline: true
                    }

                ];


                function morestats(c,n) {

                    


                    for (var i = c; i < n; i += 2) {
                        
                        pos1 = i;
                        pos2 = i;
                        pos2++;
                        
                        if (typeof $morepositions === 'undefined') {
                            
                            var $morepositions = {
                                table: [{
                                        name: resd.data[pos1].finishposition.toString(),
                                        value: resd.data[pos2].finishposition.toString(),
                                        inline: true
                                    },
                                    {
                                        name: resd.data[pos1].name,
                                        value: resd.data[pos2].name,
                                        inline: true
                                    },
                                    {
                                        name: resd.data[pos1].laptimebest,
                                        value: resd.data[pos2].laptimebest,
                                        inline: true
                                    },
                                ]
                            };
                            
                            
                        } else {
                            if(pos2 >= highestposition || pos1 > highestposition){
                                    pos1position = "---";
                                    pos1name = "---";
                                    pos1time = "---";
                                    pos2position = "---";
                                    pos2name = "---";
                                    pos2time = "---";
                                   
                            }else{
                                    pos1position = resd.data[pos1].finishposition.toString();
                                    pos1name = resd.data[pos1].name;
                                    pos1time = resd.data[pos1].laptimebest;
                                    pos2position = resd.data[pos2].finishposition.toString();
                                    pos2name = resd.data[pos2].name;
                                    pos2time = resd.data[pos2].laptimebest;
                            };

                            $morepositions.table.push({
                                name: pos1position,
                                value: pos2position,
                                inline: true
                            })
                            $morepositions.table.push({
                                name: pos1name,
                                value: pos2name,
                                inline: true
                            })
                            $morepositions.table.push({
                                name: pos1time,
                                value: pos2time,
                                inline: true
                            })
                            
                            
                        
                        }
                            
                    };
                    
                    return $morepositions.table;
                };


                while(messagessend < Howmanymessages){
                switch (messagessend){

                    case 0:
                        // TODO: Add IF racers under 5 break before morestats
                        maxposition = 14;
                        if(maxposition > highestposition){
                            maxposition = highestposition;
                        };
                        
                        namepos="Miejsca 1-15";
                        
                        sendmessage(namepos,$rankingMessage = [
                            $firstmessage, morestats(1,maxposition)
                        ]);
                        console.log("Send first message.");
                        messagessend++;
                        break;
                    
                    case 1:
                        
                        minposition = 15;
                        maxposition = 29;
                        if(maxposition > highestposition){
                            maxposition = highestposition;
                            maxposition;
                        };
                        namepos="Miejsca 16-"+ maxposition;
                        
                        sendmessage(namepos,$rankingMessage = [
                             morestats(minposition,maxposition)
                        ]);
                        console.log("Send second message.");
                        messagessend++;
                        break;
                        
                    case 2:
                        minposition = 30;
                        maxposition = 44;
                        if(maxposition > highestposition){
                            maxposition = highestposition;
                            maxposition--;
                        };
                        namepos="Miejsca 31-"+ maxposition;
                        
                        sendmessage(namepos,$rankingMessage = [
                             morestats(minposition,maxposition)
                        ]);
                        messagessend++;
                        console.log("Send third message.");
                        break;
                    
                    case 3:
                        minposition = 45;
                        maxposition = 59;
                        if(maxposition > highestposition){
                            maxposition = highestposition;
                            maxposition--;
                        };
                        namepos="Miejsca 46-"+ maxposition;
                        
                        sendmessage(namepos,$rankingMessage = [
                             morestats(minposition,maxposition)
                        ]);
                        console.log("Send fourth message.");
                        messagessend++;
                        break;
                }
            };


            
            function sendmessage(namepos,$rankingMessage){
            message.channel.send({
                embeds: [{
                    color: embedcolor,
                    author: {
                        name: namepos,
                        icon_url: resulticon
                    },
                    title: resulttitle,
                    url: resulturl,
                    fields: $rankingMessage,
                }]
            });
        }


            })
            .catch((err) => {
                console.error(`ERR:`, err)
            })
    }
}