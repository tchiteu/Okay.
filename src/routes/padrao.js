const express = require("express");
const router = express.Router();
const path = require("path");

const cadastro = require('./../controllers/cadastro');
// const login = require('./../controllers/login');

router.get('/cadastro/form', (req, res) => {
    cadastro(req.query.iNome, req.query.iEmail, req.query.iUsuario, req.query.iSenha);
    res.redirect('/login?msg=cadastrado!');
})

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + "../../../public/index.html"));
});

router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname + "../../../public/cadastro.html"));
});

module.exports = router;