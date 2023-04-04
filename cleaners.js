function cleanW(){
client.on('message', msg => { //WEATHERCLEANER
  if (msg.content === `${prefix}weatherclean`){
msg.channel.messages.fetch({ limit: 3 })// fetch this much msg 
     .then(fetched => { //then, the fetched, after defining what is a notPinned message, sets a timeout to bulkdelete
        const notPinned = fetched.filter(fetchedMsg => !fetchedMsg.pinned);
        setTimeout(function(){msg.channel.bulkDelete(notPinned, true)})})
        .catch(error => {console.log(`[ERROR:PRUNE]: ${error}`)})
        }
})}

client.on('message', msg => { //BROKERCLEANER
  if (msg.channel.id === '775979478153035796' && msg.content === `${prefix}brokerclean`){
msg.channel.messages.fetch({ limit: 13 })// fetch this much msg then bulkdelete SEE ABBOVE
     .then(fetched => {
        const notPinned = fetched.filter(fetchedMsg => !fetchedMsg.pinned);
        setTimeout(function(){msg.channel.bulkDelete(notPinned, true)})})
        .catch(error => {console.log(`[ERROR:PRUNE]: ${error}`)})
        }
})

module.exports = cleanW