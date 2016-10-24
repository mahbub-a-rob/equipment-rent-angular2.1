'use strict';

var express= require('express');
var router = express.Router();
var path = require('path');

var items = require('../../src/assets/data/items');
var cartItems = require('../../src/assets/data/cartItems');

router.route('/app/items')
        .get((req, res) => {
            res.send(items);
        })

router.route('/app/items/cart')
        .get((req, res) => {
            res.send(cartItems);
        })
        .post((req, res) => {
            cartItems = [];
            res.send([]);
        })

router.route('/app/items/cart/reduce')
        .post((req, res) => {
            let deletedItem = cartItems.splice(req.id, 1);
            res.send(deletedItem[0]);
        })

router.route('/app/items/update')
        .post((req, res) => {
            items[req.body.id].limit--;
            cartItems.push(req.body);
            res.send(items[req.body.id]);
        });

module.exports = router;