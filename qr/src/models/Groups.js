var mongoose = require('mongoose');

var groupSchema = new mongoose.Schema({
    name: String,
    members: {
        name: String,
        phone: Number
    }
});

mongoose.model('groups', groupSchema);