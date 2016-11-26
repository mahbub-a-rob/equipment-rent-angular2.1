'use strict';

var express= require('express');
var router = express.Router();
var path = require('path');

var items = require('../../src/assets/data/items');

router.route('/app/items')
        .get((req, res) => {
            res.send(items)
        })
        .put((req, res) => {
            let query = req.query.action;

            switch(query) {
                case 'update':
                    items[req.body.id].limit--;
                    res.send(items[req.body.id]);
                    break;
                case 'reduce':
                    items[req.body.id].limit++;
                    res.send(items[req.body.id]);
                    break
            }

        })
        .post((req, res) => {
            items.push(req.body);
            res.send(req.body);
        })

module.exports = router;