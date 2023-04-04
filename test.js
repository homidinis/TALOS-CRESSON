const Discord = require('discord.js');
const client = new Discord.Client();

function getToday(){
    let today = new Date();
    let months = [`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];
    let suffix = [`st`,`nd`,`rd`];
    return `**${months[today.getMonth()]}, ${today.getFullYear()-1500}**`
}


function getBossDeadline(){
    let today = new Date();
    let months = [`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];
    let suffix = [`st`,`nd`,`rd`];
    return `**${today.getDate()+3}${suffix[today.getDate()] || `th`} of ${months[today.getMonth()]}, ${today.getFullYear()-1500}**`
}
module.exports = getToday;
module.exports = getBossDeadline;
