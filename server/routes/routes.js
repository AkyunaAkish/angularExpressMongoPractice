var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/instruments'); // this is the name of the database, make it semantic
var Instruments = db.get('instruments'); // the name of the database








module.exports = router;
