const Discord = require(`discord.js`);
const axios = require(`axios`);
const {
    MessageEmbed
} = require('discord.js');



module.exports = {
    name: `r`,
    aliases: ['r'],
    description: `ranks`,
    usage: `!r`,
    execute: async (message, args) => {
        axios.get(`https://www.republicofsimracers.com/timetable/live-data/906?racenum=q&server=1`)
            .then((res) => {
                
                //Make result accessibility for all functions
                let resd = res;
                var countpositions = 0;
                // We need to calculate max finish position for specify messages to send
                for(key in resd.data){
                    countpositions++
                    // Here we need to set max finishposition number from res
                    console.log("klucz" + countpositions );
                }
                
                var higherposition = 22; // temporary variable for max messages function. Edit function above


                //We downloaded data, now create first message

                $firstmessage = [{
                        name: "Msc",
                        value: '__ 1 __',
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


                function morestats(n) {

                    for (var i = 1; i < 14; i += 2) {
                        console.log(i);
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
                            //console.log($morepositions);
                        } else {
                            $morepositions.table.push({
                                name: resd.data[pos1].finishposition.toString(),
                                value: resd.data[pos2].finishposition.toString(),
                                inline: true
                            })
                            $morepositions.table.push({
                                name: resd.data[pos1].name,
                                value: resd.data[pos2].name,
                                inline: true
                            })
                            $morepositions.table.push({
                                name: resd.data[pos1].laptimebest,
                                value: resd.data[pos2].laptimebest,
                                inline: true
                            })


                            //console.log($morepositions);
                            //console.log(pos1 + " and " + pos2);
                        }

                    };
                    //console.log($morepositions);
                    return $morepositions.table;
                };


                // Here we compare all fields of table
                $rankingMessage = [
                    $firstmessage, morestats(5)
                ];



                // Here we send message

                message.channel.send({
                    embeds: [{
                        color: 3447003,
                        author: {
                            name: "Miejsca 1-15",
                            icon_url: "https://i.imgur.com/lm8s41J.png"
                        },
                        title: "Race 897 ranking",
                        url: "https://www.republicofsimracers.com/",
                        fields: $rankingMessage,



                    }]
                });
                //next message
                message.channel.send({
                    embeds: [{
                        color: 3447003,
                        author: {
                            name: "Miejsca 15-20",
                            icon_url: "https://i.imgur.com/lm8s41J.png"
                        },
                        title: "Race 897 ranking",
                        url: "https://www.republicofsimracers.com/",
                        fields: $rankingMessage,



                    }]
                });


            })
            .catch((err) => {
                console.error(`ERR:`, err)
            })
    }
}