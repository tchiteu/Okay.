var http = require('http');

// console.log(testeFunc(4))
http.createServer(function(req,res){
    res.end("teste!");
}).listen(8081);
console.log('Ok!');
