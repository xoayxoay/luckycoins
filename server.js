var fs = require('fs');
var https = require('https');

var app = require('express')();

var options = {
  key: fs.readFileSync('client-key.pem'),
  cert: fs.readFileSync('client-cert.pem')
};
var serverPort = 8443;

var server = https.createServer(options, app);

var io = require('socket.io')(server);
var redis = require('redis');

// run node server with port 8890 
server.listen(8890);

io.on('connection', function (socket) {

    console.log("new client connected");
    var redisClient = redis.createClient();

    // register event
    redisClient.subscribe('message');
    redisClient.subscribe('onDire');
    redisClient.subscribe('onBall');

    redisClient.subscribe('onBet');    // socket notify had bet (play game)
    redisClient.subscribe('onWinBet'); // socket bet win

    // event test: send message
    redisClient.on("message", function(channel, message) {
        // emit event
        socket.emit(channel, message);
    });

    // event game dice
    redisClient.on("onDire", function(channel, message) {
        // emit event
        socket.emit(channel, message);
    });

    // event game ball
    redisClient.on("onBall", function(channel, message) {
        // emit event
        socket.emit(channel, message);
    });

    // event game ball
    redisClient.on("onBet", function(channel, message) {
        // emit event
        socket.emit(channel, message);
    });

    // event game ball
    redisClient.on("onWinBet", function(channel, message) {
        // emit event
        socket.emit(channel, message);
    });

    socket.on('disconnect', function() {
        redisClient.quit();
    });

});
