const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_okay', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then( () => {
    console.log("Conectado ao banco!");
}).catch((erro) => {
    console.log("Erro: " + erro);
})

module.exports = sequelize;