const Sequelize = require('sequelize');
const sequelize = require('./../database/mysql')

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    usuario: {
        type: Sequelize.STRING
    },  
    senha: {
        type: Sequelize.STRING
    }      
})

module.exports = Usuario;