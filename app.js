var express = require('express');
const open = require('open');
var cors = require("cors");

var cp = require("child_process");
 
var app = express();

app.use(cors());
const port = 3000;


//add external helper modules here
require('./Modules/Helper Modules/ComplimentsBackend.js')(app);
require('./Modules/Helper Modules/Logging.js')(app);

app.listen(port, () => {
  console.log(`Backend started at https://localhost:${port}`);
  open('index.html');
})
