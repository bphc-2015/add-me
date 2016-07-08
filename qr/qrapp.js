var express = require('express');

var app = express();
var router = express.Router();
require('./qrcode.js');
app.use('/qrcode', router);

require('./qrcode.js')(app);

app.listen(3000);  
console.log("Server is now running");