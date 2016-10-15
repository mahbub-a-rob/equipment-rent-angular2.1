'use strict';

var express= require('express');
var router = express.Router();

router.route('/')
        .get((req, res) => {
            console.log(`What you're asking for?`);
        });

router.route('/items')
        .get((req, res) => {
            res.send({item: "item1"});
        });

module.exports = router;