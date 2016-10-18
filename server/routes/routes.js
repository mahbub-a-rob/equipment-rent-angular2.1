'use strict';

var express= require('express');
var router = express.Router();
var path = require('path');

var items = require('../../src/assets/data/items');

router.route('/')
        .get((req, res) => {
            console.log(`What you're asking for?`);
        });

router.route('/app/items')
        .get((req, res) => {
            console.log('got GET HTTP Request!')
            res.send(items);
        })
        .post((req, res) => {
            items.push(req.body);
            res.send(req.body);
        });

module.exports = router;