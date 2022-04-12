let express = require('express');
let opn = require('opn');
require('dotenv');

var textitems = ["Good morning, handsome!", "Hey there sexy!", "How was your sleep?", "Enjoy your day!", "You look sexy!", "Hello, beauty!", "Looking good today!", "You look nice!", "Wow, you look hot!"];

module.exports = function(app){

    app.get('/textdemo', function(req, res){
        res.send(textitems[Math.floor(Math.random()*textitems.length)]);
    });

    //other routes..
}