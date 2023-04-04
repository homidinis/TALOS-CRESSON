//this makes the repl.it webserver to host everything else

const express = require('express');

const server = express();

server.all('/', (req, res)=>{
    res.send("I'm awake!")
})

function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready! The Broker's Son listening at 3000")});
}
module.exports = keepAlive;