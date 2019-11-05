const express = require("express");
const path = require('path');

const app = express();
app.use(express.static(__dirname + "/../public"));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/cadastro.html"));
});

app.post('/cadastro', (req, res) => {
   res.redirect("/login");
})

app.listen(8081);