'use strict';

var express = require('express');
var config = require('./config.json');
var path = require('path');
var jade = require('jade');

var app = express(),
    counter = 0;
app.use(express.static(path.join(__dirname, '/../public/')));

app.get('/get', function(req, res) {
    console.log('get', counter);
    res.status(200).json(counter);
});

app.get('/click', function(req, res) {
    console.log('click', counter);
    counter = counter + 1;
    res.status(200).json(counter);
});

app.get('/countPage', function(req, res) {
    res.send(jade.render('h1 #{count}',{count: counter}));
});

app.listen(config.port, function() {
    console.log('Now listening to  http://localhost:' + config.port);
});


