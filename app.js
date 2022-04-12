var express = require('express');
var opn = require('opn');
require('dotenv');
var cors = require("cors");

var cp = require("child_process");

var app = express();

app.use(cors());
const port = 3000;


//add external helper modules here
require('./Modules/Helper Modules/DemoTextBackend.js')(app);

app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`);
  opn('index.html');
})
