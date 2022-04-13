let express = require('express');
const fs = require('fs');

var today = new Date();

var textitems = ["Good morning, handsome!", "Hey there sexy!", "How was your sleep?", "Enjoy your day!", "You look sexy!", "Hello, beauty!", "Looking good today!", "You look nice!", "Wow, you look hot!"];

module.exports = function(app){

    app.get('/textdemo', function(req, res){
        const jsondata = "Modules/ModuleData/DemoTextData.json";

    fs.readFile(jsondata, 'utf8' , (err, data) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        res.send(data);
        })
    });

    //other routes..
}