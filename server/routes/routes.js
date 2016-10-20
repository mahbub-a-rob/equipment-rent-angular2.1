'use strict';

var express= require('express');
var router = express.Router();
var path = require('path');

var items = require('../../src/assets/data/items');

router.route('/app/items')
        .get((req, res) => {
            res.send(items);
        })
        .post((req, res) => {
            items.push(req.body);
            res.send(req.body);
        });

router.route('/app/items/update')
        .post((req, res) => {
            items[req.body.id].limit--;
            res.send(items[req.body.id]);
        });

module.exports = router;