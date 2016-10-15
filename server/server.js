'use strict';

require('dotenv').config();
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var mwAllowCors = require('./middlewares/mwAllowCors');
var routes = require('./routes/routes')

// Middleware execution
app.use(express.static('dist'))
app.use(mwAllowCors);

// routes
app.use('/', routes);

// socket.io
io.on('connection', (client) => {
    client.emit('message', {hello: 'world'});
    console.log('client connected and I am happy!');

    client.on('inputedData', (inputedData) => {
        console.log('received this: ', inputedData);
        client.broadcast.emit('inputedData', inputedData);
    })
});

server.listen(8080, () => {
    console.log('started on port 8080');
});