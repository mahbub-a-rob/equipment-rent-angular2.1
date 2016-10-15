'use strict';

require('dotenv').config();

var express = require('express');
var app = express();
app.use(express.static('dist'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4001");
  next();
});

app.get('/', (req, res) => {
    console.log(`What you're asking for?`);
});

app.get('/items', (req, res) => {
    res.send({item: "item1"});
});

app.listen(8080);