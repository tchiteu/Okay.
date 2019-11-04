const express = require("express");
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.static(__dirname + "/../public"));

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});

app.get('/cadastro', function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/cadastro.html"));
});

app.listen(8081);