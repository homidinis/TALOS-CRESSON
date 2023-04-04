const keepAlive = require('./server.js');
const config = require('./config.json');
const { prefix } = require('./config.json');

var BROKERLIST = require('./brokerlist.json');
var WEATHER = require('./weather.json')
var PINGMAD = require('./pingmad.json');
var INSULTS = require('./insults.json');
var REMINDERS = require('./reminder.json');

var quotes = BROKERLIST.quotes; //in BROKERLIST (that requires the file above) find json tag 'quotes'
var quotes2 = BROKERLIST.quotes2;
var items1 = BROKERLIST.item1;
var items2 = BROKERLIST.item2;
var items3 = BROKERLIST.item3;
var items4 = BROKERLIST.item4;
var pingmad = PINGMAD.pingmad;
var randInsult = INSULTS.insults;
var reminder = REMINDERS.reminders;

const getBossDeadline = require("./test.js")

var lunarPhaseGreenWeek2 = WEATHER.lunarPhaseGreenWeek2
var lunarPhaseGreenWeek3 = WEATHER.lunarPhaseGreenWeek3
var lunarPhaseGreenWeek4 = WEATHER.lunarPhaseGreenWeek4
var lunarPhaseBlueWeek2 = WEATHER.lunarPhaseBlueWeek2
var lunarPhaseBlueWeek3 = WEATHER.lunarPhaseBlueWeek3
var lunarPhaseBlueWeek4 = WEATHER.lunarPhaseBlueWeek4

var weatherMainland = WEATHER.weatherMainland
var weatherCairm = WEATHER.weatherCairm
var weatherRatoria = WEATHER.weatherRatoria
var weatherBelstagar = WEATHER.weatherBelstagar

//TODO TODO TODO TODO TODO:
//- make individual command files for misc commands (other than brokerlist) biar ga pake if/else if terus
//- setup rare boss system (i think i'm gonna try with just "pick one boss from this list, then post it as an embed. after set amount of hours, delete the one in non-archive channel"
//CLEAN UP THE FORMATTING, JESUS GOD

// TODO:
// put brokerlist in a module.exports
// PUT THINGS IN MODULES!


//todo 2022: 
//dm everyday at x hour, post "reminded" in channel, react to own message
//if message reacted, post "done" in channel, repeat
//use webhook for timer?




// ========= GET SOME PASTA SAUCE BECAUSE THERE'S SPAGHETTI CODE INCOMING =========

keepAlive();

const Discord = require('discord.js');

const client = new Discord.Client();

//no idea what this is for
//intents is supposedly. required. but it works fine without
// const { Client, GatewayIntentBits } = require('discord.js');

// const client = new Client({
// 	intents: [
// 		GatewayIntentBits.Guilds,
// 		GatewayIntentBits.GuildMessages,
// 		GatewayIntentBits.MessageContent,
// 		GatewayIntentBits.GuildMembers,
// 	],
// });


const moment = require('moment')
const { MessageEmbed } = require('discord.js')


client.on('message', msg => { //just one event listener so it doesn't bog the ram down
  //obligatory pingmad, why not?
    if (msg.content === `${prefix}ping`) {
      msg.reply(pinganger())
    }
  
    if (msg.content === `WE'RE ALL PAWNS TO THE OROCHI LORE`) {
      msg.channel.send("***WE'RE ALL PAWNS TO THE CHARLES LORE!***")
        .then(msg => { msg.delete({ timeout: 180000 }) })
    }
  
  
    //makes it do things on command. THIS PULLS UP THE OPENING QUOTE
    function randomQuote() {
      return quotes[Math.floor(Math.random() * quotes.length)];
    };
    function randomClosing() {
      return quotes2[Math.floor(Math.random() * quotes2.length)];
    };
    //THESE ARE JUST FLAVOR TEXT FOR MANUAL PINGS
    function pinganger() {
      return pingmad[Math.floor(Math.random() * pingmad.length)];
    };

  
    //remind meds for gf
    function randomReminder() {
      return reminder[Math.floor(Math.random() * reminder.length)];
    }
    if (msg.channel.id === '1016999956814508082') {
      if (msg.content === "~remindnow") {
      const person = '333541373930242058'
        client.users.fetch('333541373930242058')
          .then(user => {
              user.send(randomReminder())
              .then(() => msg.channel.send('reminded!'))
                .then(()=> setTimeout(function(){user.send('Second reminder! Have you taken your meds? If you have, good! If you havent GO DO IT NOW')},1800000))              
          // .then(()=>{
          //   const filter = (msg) => msg.author.id==='333541373930242058'
          //   msg.author.dmChannel.awaitMessages(filter)
          //   .then((collected) => msg.channel.send(collected.first().content).catch("can't collect message")) 
          // })
          .catch('cant collect message')
        
        })
    }}
      
     if (msg.channel.id === '1016999956814508082') {
      if (msg.content === "~remindA") {
        client.users.fetch('333541373930242058')
          .then(user => {
              user.send("Second reminder! Don't forget to take your meds! My creator loves you!")})}}
        

                // .then((msg) => {
              //   msg.channel.awaitMessages((m) => m.author.id === person.id, { max: 1, time: 300000 })
              // });
  
  
  
    //HARDCODED EMBED LIST!! THIS IS THE NEW BROKERLIST =====
    //BELOW IS ITEM SET NO. 1
    const brokerItem1 = new Discord.MessageEmbed()
      .setColor('#5F1212')
      .setImage('https://media.discordapp.net/attachments/776083491200434187/776103238876266496/AbsalomHair.jpg')
      .setTitle("**Absalom's Hair** - `[7 rNP]`")
      .setDescription('>  Run, run like Absalom did. We took his hair out of the tree branches. Brew it to create x10 Speed Buff Potion for yourself.')
    const brokerItem2 = new Discord.MessageEmbed()
      .setColor('#5F1212')
      .setTitle("**Eye of Ulgath-Shuttah.** - `[35 rNP]`")
      .setDescription('>  The Telyoas Nephilims were and still are afraid of this spherical rock. Once used, it will disappear. Allows you to scare ONLY T-nephilim bosses, and still get loot and EXP. The boss must be in your Tier Range.')
      .setImage('https://media.discordapp.net/attachments/776083491200434187/776103243830132757/eyeof.jpg')
    const brokerItem3 = new Discord.MessageEmbed()
      .setColor('#5F1212')
      .setTitle("**Scales of Aruna** - `[15 rNP]`")
      .setDescription("> Enchanted round, thin, black and red jewels. Reduces all damage by 0.25x for an entire battle.*")
      .setImage('https://media.discordapp.net/attachments/776083491200434187/776103248221437962/ScalesofAruna.jpg')
  
    //BELOW IS ITEM SET NO. 2
    const brokerItem4 = new Discord.MessageEmbed()
      .setColor('#5F1212')
      .setTitle("**Book of Shud** -`[25 rNP]`")
      .setDescription("> Adds another Enchantment slot to your weapon.")
      .setImage('https://media.discordapp.net/attachments/776083491200434187/776120486928056341/bookofShud.jpg')
    const brokerItem5 = new Discord.MessageEmbed()
      .setColor('#5F1212')
      .setTitle("**Mother Ithala's Amulet** - `[15 rNP]`")
      .setDescription("> Protects you from a fatal attack. A finishing blow on you will be nullified and leave you alive for 10 HP.")
      .setImage('https://media.discordapp.net/attachments/776083491200434187/776120478581915698/AmuletofMother.jpg')
    const brokerItem6 = new Discord.MessageEmbed()
      .setColor('#5F1212')
      .setTitle("**The Dirt of Gnrcsh** - `[5 WM]`")
      .setDescription("> Gnorsch gnrsch, mmm Dirt. Good for your health. Heals you by 10% of your total health.")
      .setImage('https://media.discordapp.net/attachments/776083491200434187/776120482423373854/dirt.jpg')
  
    //BELOW IS ITEM SET NO. 3
  
    const brokerItem7 = new Discord.MessageEmbed()
      .setColor('#5F1212')
      .setTitle("**Enchanted Wheel of Cheese** - `[2 rNP]`")
      .setDescription("> Mmm... good cheese. Allows you to use `!speed` command for one round.")
      .setImage('https://media.discordapp.net/attachments/776083491200434187/776120496537468968/cheese.jpg')
    const brokerItem8 = new Discord.MessageEmbed()
      .setColor('#5F1212')
      .setTitle("**Crown of Bones** - `[30 rNP]`")
      .setDescription("> Mangled finger bones of war victims formed into a morbid crown   sold by an ex-member of the Virgins of the Moon. Permanently increases your damage by +1.5x. Does not stack with other damage effects.")
      .setImage('https://media.discordapp.net/attachments/776083491200434187/776089200038510612/pant_for_sale.jpg')
    const brokerItem9 = new Discord.MessageEmbed()
      .setColor('#5F1212')
      .setTitle("**Scroll of Methis** - `[35 rNP]`")
      .setDescription("> A scroll from Hell, smuggled out by a scholar. Permanently increases your damage by 2x. Does not stack with other damage effects.")
      .setImage('https://media.discordapp.net/attachments/776083491200434187/776120493534216222/scroll.jpg')
  
  
    //BELOW IS ITEM SET NO. 4
  
    const brokerItem10 = new Discord.MessageEmbed()
      .setColor('#5F1212')
      .setTitle("**Katum Velus** - `[3 rNP]`")
      .setDescription("> A sacred wood charm from the Arjure, only worn during important rituals. Well, you probably can wear it without them knowing. Negates one OPEN, but skip your next turn. Can only have 1 in your inventory.")
      .setImage('https://media.discordapp.net/attachments/776083491200434187/776120473015549952/katumVelus.jpg')
    const brokerItem11 = new Discord.MessageEmbed()
      .setColor('#5F1212')
      .setTitle("**Grimoire of Heliotrope** - `[25 rNP]`")
      .setDescription("> Grimoire that can only be USED by HEALER class. Increases heal permanently by 1.5x. Effect does not stack with other healing effects.")
      .setImage('https://media.discordapp.net/attachments/776083491200434187/776120489869049877/heliotrope.jpg')
  
    //==================================== RARE BOSSES ===============================================================
  
    // client.on('message', msg=>{
    //   switch(msg.content){ //basically "in the case of x, send this, in the case of y, send that" its a cleaner if else
    //     case ("~boss1"):
    //       const rboss1 = new Discord.MessageEmbed()
    //       .setColor('#11D090')
    //       .setImage('https://media.discordapp.net/attachments/783165753259851797/783165959036469258/modybick.png?width=667&height=520')
    //       .setTitle("**Moby Dick, The Whalen Terror**")
    //       .setDescription('>')
    //       .addFields(
    //      { name: 'EXPIRES AT', value: getBossDeadline() })
    //      .setTimestamp()
    //     msg.delete()
    //   .then (() => msg.channel.send(rboss1))
    //   .catch(error => {console.log(`[ERROR: BROKERLISTitem11]: ${error}`)})
    //     break;}})
  
  
    //MAIN JUICE, LITERALLY BROKERBOT'S ENTIRE MAIN PURPOSE=========
    var itemEmbeds1 = [brokerItem1, brokerItem2, brokerItem3]
    var randomEmbeds1 = itemEmbeds1[Math.floor(Math.random() * itemEmbeds1.length)];
    var itemEmbeds2 = [brokerItem4, brokerItem5, brokerItem6]
    var randomEmbeds2 = itemEmbeds2[Math.floor(Math.random() * itemEmbeds2.length)];
    var itemEmbeds3 = [brokerItem7, brokerItem8, brokerItem9]
    var randomEmbeds3 = itemEmbeds3[Math.floor(Math.random() * itemEmbeds3.length)];
    var itemEmbeds4 = [brokerItem10, brokerItem11]
    var randomEmbeds4 = itemEmbeds4[Math.floor(Math.random() * itemEmbeds4.length)];
  
    if (msg.channel.id === '775979478153035796') {
      if (msg.content === "The bid will begin shortly. The Brokerage's wares will refresh soon... Please make your desired purchases now before the next cycle.") {
        setTimeout(function() {
          msg.channel.send(randomQuote())
            .then(() => msg.channel.send("```==  TODAY'S RARE WARES  ==```"))
            .then(() => msg.channel.send(randomEmbeds1))
            .then(() => msg.channel.send(randomEmbeds2))
            .then(() => msg.channel.send(randomEmbeds3))
            .then(() => msg.channel.send(randomEmbeds4))
            .then(() => msg.channel.send(randomClosing()))
            .then(() => msg.channel.messages.fetch({ limit: 13 })) // fetch this much msg then bulkdelete
            .then(fetched => {
              const notPinned = fetched.filter(fetchedMsg => !fetchedMsg.pinned);
              setTimeout(function() { msg.channel.bulkDelete(notPinned, true) }, 258600000)
            }) 
            .catch(error => { console.log(`[ERROR: MAIN CODE!]: ${error}`) })
            .catch(error => { console.log(`[ERROR: MAIN CODE!]: ${error}`) });
  
          if (msg.content === "The bid will begin shortly. The Brokerage's wares will refresh soon... Please make your desired purchases now before the next cycle.") { msg.delete(); }
        }, 12000); //delay before msg is sent. settimeout's timeout basically it checks for the channel (needs to be ONLY in the brokerage) then 4a4e5360568ed8c057ec3d66307b4c4bhecks for the trigger sentence, then sets a 5 second timeout to send everything in the block THEN fetch the whole thing, excluding pinned, deleting them in 258k seconds. this delete func is redundant, use ~brokerclean instead
      }
    }
  
  
  
  
    //==================================== randomize weather ====================================
    function weatherM() {
      return weatherMainland[Math.floor(Math.random() * weatherMainland.length)];
    };
    function weatherC() {
      return weatherCairm[Math.floor(Math.random() * weatherCairm.length)];
    };
    function weatherR() {
      return weatherRatoria[Math.floor(Math.random() * weatherRatoria.length)];
    };
    function weatherB() {
      return weatherBelstagar[Math.floor(Math.random() * weatherBelstagar.length)];
    };
    // ==================================== randomize lunar phase in 1 week ====================================
    function lunarGreenWeek2() {
      return lunarPhaseGreenWeek2[Math.floor(Math.random() * lunarPhaseGreenWeek2.length)];
    };
    function lunarGreenWeek3() {
      return lunarPhaseGreenWeek3[Math.floor(Math.random() * lunarPhaseGreenWeek3.length)];
    };
    function lunarGreenWeek4() {
      return lunarPhaseGreenWeek4[Math.floor(Math.random() * lunarPhaseGreenWeek4.length)];
    };
    function lunarBlueWeek2() {
      return lunarPhaseBlueWeek2[Math.floor(Math.random() * lunarPhaseBlueWeek2.length)];
    };
    function lunarBlueWeek3() {
      return lunarPhaseBlueWeek3[Math.floor(Math.random() * lunarPhaseBlueWeek3.length)];
    };
    function lunarBlueWeek4() {
      return lunarPhaseBlueWeek4[Math.floor(Math.random() * lunarPhaseBlueWeek4.length)];
    };
  
  
    //==================================== WEATHER FORECAST ====================================
  
    //first weather calendar with moon  phases
    if (msg.content === `${prefix}weather` && msg.channel.id === '791687518579720273') {
      const windspeed = require('./windSpeed.js')
      const getToday = require('./test.js')
      const weatherCalendar = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor('📜 The Boreal Herald')
        .setTitle('Calendar of Canaan')
        .setDescription(getToday())
        .setThumbnail('https://cdn.discordapp.com/icons/520819479706599424/4a4e5360568ed8c057ec3d66307b4c4b.webp?size=128')
      //END main block for the date
  
  
      function weekOfMonth(input = moment()) {
        const firstDayOfMonth = input.clone().startOf('month');
        const firstDayOfWeek = firstDayOfMonth.clone().startOf('week');
        const offset = firstDayOfMonth.diff(firstDayOfWeek, 'days');
        return Math.ceil((input.date() + offset) / 7);
      } //calculating week of month by https://stackoverflow.com/questions/21737974/moment-js-how-to-get-week-of-month-google-calendar-style/21738982
  
  
      //BEGIN lunar phase selection, posts the function above. switch(what the weekofmonth outputs), case is "in the case of x"
      switch (weekOfMonth()) { //set lunar phase by week
        case 1:
          weatherCalendar.addFields({ name: "Lunar Phase, Week 1", value: ":waning_crescent_moon: Early Green Moon \n Normal Nephilim activity" + "\n" + "_ _ _ _ _ _" + "\n" + ":waning_crescent_moon: Early Blue Moon" });
          break;
        case 2:
          weatherCalendar.addFields({ name: "Lunar Phase, Week 2", value: lunarGreenWeek2() + "\n " + "_ _ _ _ _ _" + "\n" + lunarBlueWeek2() });
          break;
        case 3:
          weatherCalendar.addFields({ name: "Lunar Phase, Week 3", value: lunarGreenWeek3() + "\n " + "_ _ _ _ _ _" + "\n" + lunarBlueWeek3() });
          break;
        case 4:
          weatherCalendar.addFields({ name: "Lunar Phase, Week 4", value: lunarGreenWeek4() + "\n " + "_ _ _ _ _ _" + "\n" + lunarBlueWeek4() });
          break;
        case 5:
          weatherCalendar.addFields({ name: "Lunar Phase, Week 5", value: lunarGreenWeek4() + "\n " + "_ _ _ _ _ _" + "\n" + lunarBlueWeek4() });
          break; ""
        default:
          console.log("WEEK ERROR: oh shit oh fuck whats wrong with the fucking week now");
      }
  
      const weatherForecast = new Discord.MessageEmbed() //second embed, weather forecast
        .setColor('#0099ff')
        .setAuthor("Canaan Weekly Weather Forecast", "https://media.discordapp.net/attachments/776083491200434187/791249616782753792/cloud_2601.png")
        .addFields(
          { name: 'Mainland Weather Forecast', value: weatherM() + '\n> **Wind**' + '\n' + windspeed() },
          { name: "_ _ _ _ _ _", value: "_ _ _ _ _ _" },
          { name: 'Cairm Islands Weather Forecast', value: weatherC() + '\n> **Wind**' + '\n' + windspeed() },
          { name: "_ _ _ _ _ _", value: "_ _ _ _ _ _" },
          { name: 'Ratoria Weather Forecast', value: weatherR() + '\n> **Wind**' + '\n' + windspeed() },
          { name: "_ _ _ _ _ _", value: "_ _ _ _ _ _" },
          { name: 'Belstagar Weather Forecast', value: weatherB() + '\n> **Wind**' + '\n' + windspeed() }
        )
      msg.delete()
        .then(() => msg.channel.send(weatherCalendar))
        .then(() => msg.channel.send(weatherForecast))
        .catch(error => { console.log(`[ERROR: weatherForecast]: ${error}`) })
    }
  
    //WEATHERCLEANER
    if (msg.channel.id === '791687518579720273' && msg.content === `${prefix}weatherclean`) {
      msg.channel.messages.fetch({ limit: 3 })// fetch this much msg 
        .then(fetched => { //then, the fetched, after defining what is a notPinned message, sets a timeout to bulkdelete
          const notPinned = fetched.filter(fetchedMsg => !fetchedMsg.pinned);
          setTimeout(function() { msg.channel.bulkDelete(notPinned, true) })
        })
        .catch(error => { console.log(`[ERROR:PRUNE]: ${error}`) })
    }
  
  
    //BROKERCLEANER
    //   if (msg.channel.id === '775979478153035796' && msg.content === `${prefix}brokerclean`){
    // msg.channel.messages.fetch({ limit: 13 })// fetch this much msg then bulkdelete SEE ABBOVE
    //      .then(fetched => {
    //         const notPinned = fetched.filter(fetchedMsg => !fetchedMsg.pinned);
    //         setTimeout(function(){msg.channel.bulkDelete(notPinned, true)})})
    //         .catch(error => {console.log(`[ERROR:PRUNE]: ${error}`)})
    //         }
  
  
    //punishes doe for saying ya'll or yal'l. quote "The code you posted checks if the entire message's content is a member of your array. To accomplish what you want, loop over the array and check if the message contains each item" ====================================
    var forbiddenWords = ["ya'll", "yal'l"]
    for (var i = 0; i < forbiddenWords.length; i++) {
      if (msg.content.includes(forbiddenWords[i])) {
        msg.reply('***you ' + insult() + '!***' + { files: ["https://media.discordapp.net/attachments/523129804242026496/776458498972057660/unknown.png?width=384&height=519"] })
          .catch(console.error)
        break;
      }
    }
  
  
  
    function insult() {
      return randInsult[Math.floor(Math.random() * randInsult.length)];
    };
  
    //put out random insults ====================================
    if (!msg.content.startsWith(prefix)) {
      return;
    }
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const insultTarget = msg.mentions.members.first();
    if (command === `insult`) {
      msg.delete()
      if (!msg.mentions.users.size) {
        return msg.channel.send('***' + `${msg.author} is a ` + insult() + '!***');
      }
      msg.channel.send('***' + `<@${insultTarget.id}>, you ` + insult() + '!***');
    }
  
  
  
    // ==================================== module exporting! ====================================
    if (msg.content === `${prefix}testingdate`) {
      msg.channel.send(getBossDeadline())
    }
  
  
  
  
    //======================================LOOT========================
    //1. make embeds 2. randomizer picks an embed 3. brokerbot replies to the poster with opening quote and sends the randomizer that picks an embed
  
  
    //is this efficient?
    if (msg.content === `${prefix}lootrank1`) {
  // && msg.channel.id === "775968166320144414"
      const lootItem1 = new Discord.MessageEmbed()
        .setColor('GOLD')
        .setDescription(`${msg.author}, you have gained:`
          + "\n" +
          "**1 Nephilim Parts**")
      const lootItem2 = new Discord.MessageEmbed()
        .setColor('GOLD')
        .setDescription(`${msg.author}, you have gained:`
          + "\n" +
          "**3 Nephilim Parts**")
      const lootItem3 = new Discord.MessageEmbed() //healcard
        .setColor('GOLD')
        .setDescription(`${msg.author}, you have gained:`
          + "\n" +
          "**5 Nephilim Parts**")
      const lootItem4 = new Discord.MessageEmbed()
        .setColor('GOLD')
        .setDescription(`${msg.author}, you have gained:`)
        .setImage('https://cdn.discordapp.com/attachments/776083491200434187/818874727728021524/ICCards_S_00_Healc.png')
      const lootItem5 = new Discord.MessageEmbed()
        .setColor('GOLD')
        .setDescription(`${msg.author}, you have gained:`)
        .setImage('https://cdn.discordapp.com/attachments/776083491200434187/818874677899296798/ICCards_M_01_ButterflyPath.png')
      const lootItem6 = new Discord.MessageEmbed()
        .setColor('GOLD')
        .setDescription(`${msg.author}, you have gained:`)
        .setImage('https://cdn.discordapp.com/attachments/776083491200434187/818874736012034048/ICCards_M_05_CrownofBrambles.png')
      const lootItem7 = new Discord.MessageEmbed()
        .setColor('GOLD')
        .setDescription(`${msg.author}, you have gained:`)
        .setImage('https://cdn.discordapp.com/attachments/776083491200434187/818874733550370826/ICCards_S_01_FriendHealD.png')
      const lootItem8 = new Discord.MessageEmbed()
        .setColor('GOLD')
        .setDescription(`${msg.author}, you have gained:`)
        .setImage('https://cdn.discordapp.com/attachments/776083491200434187/818874730450911291/ICCards_S_00_HealD.png')
  
      var lootEmbeds1 = [lootItem1, lootItem2, lootItem2, lootItem2, lootItem3, lootItem3, lootItem3, lootItem3, lootItem3, lootItem4, lootItem5, lootItem6, lootItem7, lootItem8, lootItem8, lootItem8, lootItem8]
      var randomLoot1 = lootEmbeds1[Math.floor(Math.random() * lootEmbeds1.length)];
  
      msg.delete()
      msg.channel.send(randomLoot1)
        // msg.reply("You've gained the following garbage:")
        //  .then(() => msg.channel.send(randomLoot1))
        .catch(error => { console.log(`[ERROR: LOOTLISTitem1]: ${error}`) })
    }
  

})


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.login(process.env.DISCORD_TOKEN);














//with code modified from 
//https://github.com/dekuraan/QuoteBot
//and lots from stackexchange
//i owe them my life

