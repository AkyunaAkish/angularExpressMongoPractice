require('dotenv').load();
var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI); // this is the name of the database, make it semantic
var Instruments = db.get('instruments'); // the name of the database

router.get('/', function(req, res) {  // INDEX
  Instruments.find({}, function(err, instruments) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(instruments); // OK
  })
});

router.post('/', function(req, res) { // CREATE
  Instruments.insert(req.body, function(err, instruments) {
    if (err) {
      res.send(err);
    }
    res.status(201).json(instruments); // Created
  });
})

router.get('/new', function(req, res){ // NEW
  // goes to forms page for user to enter a new item
  // this route isn't needed in Express because it
  // doesn't get any data from the database
  // just use a href anchor in Angular to go to the forms page
});

router.get('/:id', function(req, res) { //SHOW
  Instruments.findOne({_id: req.params.id}, function(err, instruments) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(instruments); // OK
  })
})

router.get('/:id/edit', function(req, res){ // EDIT (identical to SHOW route)
  Instruments.findOne({_id: req.params.id}, function(err, instruments) {
    if (err) {
      res.send(err)
    }
    res.status(200).json(instruments) // OK
  })
});

router.put('/:id', function(req, res) { // UPDATE
  Instruments.findAndModify({_id: req.params.id}, req.body, function(err, instruments) {
    if (err) {
      throw err;
    }
    res.json(req.body);
  })
})

router.delete('/:id', function(req, res) { //DESTROY
  Instruments.remove({_id: req.params.id}, function(err, instruments){
    if (err) {
      throw err;
    }
    res.status(204).json(instruments); // No Content
  });
});






module.exports = router;
