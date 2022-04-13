var express = require('express');
const open = require('open');
var cors = require("cors");

var cp = require("child_process");
 
var app = express();

app.use(cors());
const port = 3000;


//add external helper modules here
require('./Modules/Helper Modules/DemoTextBackend.js')(app);

app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`);
  open('index.html');
})
