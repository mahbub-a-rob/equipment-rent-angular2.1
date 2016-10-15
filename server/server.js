'use strict';

require('dotenv').config();
var express = require('express');
var app = express();

var mwAllowCors = require('./middlewares/mwAllowCors');
var routes = require('./routes/routes')

// Middleware execution
app.use(express.static('dist'))
app.use(mwAllowCors);

// routes
app.use('/', routes);

app.listen(8080);