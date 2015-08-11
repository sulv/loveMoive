var koa = require('koa');
var app = koa();
var config = require('./config.js');
app.use()
app.listen(config.port, function(){
    console.log('app listened on ' + config.port);
})
process.on("uncaughtException", function(err){
    console.log(err);
})
