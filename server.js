var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var users = [];
var connections = [];
server.listen(process.env.PORT || 3000);
console.log('server is running');
app.get('/', function(req, res) {
	res.sendFile(__dirname+ '/index.html');
});
console.log('m here');
io.sockets.on('connection', function(socket) {
	console.log('reached here');
	connections.push(socket);
	console.log('Connected %s socket', connections.length);
	//Disconnect
	connections.splice(connections.indexOf(socket));
	console.log('Disconnected %s socket', connections.length);
});