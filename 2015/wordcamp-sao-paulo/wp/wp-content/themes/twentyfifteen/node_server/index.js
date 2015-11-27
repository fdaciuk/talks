'use strict';
var io = require('socket.io')(3000);
io.adapter(require('socket.io-redis')());

io.on('connect', function(socket) {
  console.log('io connected!');
});
