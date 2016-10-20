'use strict';

require('dotenv').config();

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var path = require('path');
var bodyParser = require('body-parser');

var mwAllowCors = require('./middlewares/mwAllowCors');
var routes = require('./routes/routes');
var ioConnection = require('./sockets/ioConnection');

app.set('dist', path.join(__dirname, 'dist'));
// Middleware execution
app.use('/', express.static('dist'));
app.use('/equipment', express.static('dist'));
app.use('/rent-list', express.static('dist'));
app.use('/item-detail/:id', express.static('dist'));

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(mwAllowCors);

// routes
app.use('/', routes);

// socket.io
io.on('connection', ioConnection);


var port = process.env.PORT || '8080';
server.listen(port, () => {
    console.log(`started the server! on port: ${port}`);
});