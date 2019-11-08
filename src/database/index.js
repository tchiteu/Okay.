const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/", {useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Conectado com sucesso!");
}).catch((err) => {
    console.log("Erro ao conectar ao banco" + err);
})

// Model
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    usuario: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    }
})

// Collection 
mongoose.model('usuarios', UsuarioSchema);

const Usuario = mongoose.model('usuarios');

new Usuario({
    nome: "Matheus Santos",
    usuario: "theus",
    email: "matheus@gmail.com",
    senha: "1234"
}).save().then(() => {
    console.log("Cadastrado com sucesso!");
}).catch((err) => {
    console.log("Erro ao cadastrar: " + err);
})
