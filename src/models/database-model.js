/*MongoDB model for Storing group and Contacts Data*/

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');   //test will be replaced by the database location


var contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    updated_at:{type: Date, default: Date.now},
});

var contacts = mongoose.model('contacts', contactSchema);

var groupSchema = new mongoose.Schema({
    name: String,
    members: Array  //members field is actually array of contacts
});

var groups = mongoose.model('groups', groupSchema);

var callback = function(err, data){
    if(err) return console.error(err);
    console.log(data);
};

/*
example: groups.find({name:"someName"}, callback);
         contacts.find({phone: Number}, callback);
*/
