let express = require('express');


module.exports = function(app){

    app.get('/logmodstart:id', function(req, res){
        res.send('test');
        console.log('Module: ' + req.params.id.split(":")[1] + ' Has been started');
    });
}

console.log('Helper Module: Logging Has been started');