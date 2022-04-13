let express = require('express');
const fs = require('fs');

var today = new Date();


module.exports = function(app){

    app.get('/textdemo', function(req, res){
        const jsondata = "Modules/ModuleData/ComplimentsData.json";

    fs.readFile(jsondata, 'utf8' , (err, data) => {
        if (err) {
            res.send(err);
            return;
        }
        res.send(data);
        })
    });

}
console.log('Helper Module: ComplimentsBackend Has been started');