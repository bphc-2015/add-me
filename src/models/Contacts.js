var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    name: String,
    phone: Number
});

mongoose.model('contacts', contactSchema);