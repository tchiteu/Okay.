const express = require("express");
const app = express();
var path = require('path');

app.use(express.static(__dirname));
app.get("/", function(req, res){
    res.send("Seja bem-vindo!");
})

app.get("/login", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
})

app.listen(8081, function(){
    console.log('Servidor rodando.');
})