var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
require('./qrcode.js');
app.use('/qrcode', router);
app.use(express.static(path.join(__dirname, 'public')));
require('./qrcode.js')(app);

app.listen(3000);  
console.log("Server is now running");