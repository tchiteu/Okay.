const express = require("express");
const padrao = require("./routes/padrao.js");

const app = express();
app.use(express.static(__dirname + "/../public"));

app.use(padrao);

app.listen(8081);