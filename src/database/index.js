const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@okayteste-dekxi.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser : true });
mongoose.Promise = global.Promise;

module.exports - mongoose;