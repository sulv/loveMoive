
var koa = require('koa');
var favicon = require('koa-favicon');
var app = koa();
var path = require("path");
var config = require('./config.js');
var static = require("koa-static");

app.use(static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public/imgs/favicon.ico')));

app.listen(config.port, function(){
    console.log('app listened on ' + config.port);
})
app.on('error', function(err, ctx){
    log.error('server error', err, ctx);
});
