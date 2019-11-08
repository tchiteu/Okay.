const express = require("express");
const router = express.Router();
const path = require("path");

router.post('/cadastro', (req, res) => {
    res.redirect("/login");
})

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + "../../../public/index.html"));
});

router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname + "../../../public/cadastro.html"));
});

module.exports = router;