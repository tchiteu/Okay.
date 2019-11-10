const Usuario = require('./../models/usuarios');

const cadastro = (nome, email, usuario, senha) => {
    Usuario.create({
        nome: nome,
        email: email,
        senha: usuario,
        usuario: senha,
    })
}

module.exports = cadastro;