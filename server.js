const express = require('express');
const app = express();
  
app.route("/whoami").get((req,res)=>{
    let ip = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress
    res.send({
    'ipaddress':ip ,
    'language': req.headers["accept-language"].split(',')[0],
    'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
    })
})


app.listen(8080)
