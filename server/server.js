'use strict';

require('dotenv').config();

var express = require('express');
var app = express();
app.use(express.static('dist'))

app.get('/', (req, res) => {
    console.log(`What you're asking for?`);
});

app.get('/data', (req, res) => {
    res.json({"data": "data2"})
});

app.listen(8080);