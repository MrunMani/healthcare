var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	name:{
        type: String,
        required: true
    },
    registeration_id: {
        type: Number,
        required: true
    },
    no_of_doctors: {
        type: Number,
        required: true
    },
    no_of_consultants:{
        type: Number,
        required: true
    },
    total_beds: {
        type: Number,
        required: true
    },
    private_wards:{
        type: Number,
        required: true
    },
    no_of_beds_for_ews:{
        type: Number,
        required: true
    },
    emergency_services:{
        type: Number,
        required: true
    },
    proof_of_reg: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

var Hospital = module.exports = mongoose.model('Hospital', UserSchema);

module.exports.createUser = function(newUser, callback){
// 	bcrypt.genSalt(10, function(err, salt) {
// 	    bcrypt.hash(newUser.password, salt, function(err, hash) {
// 	        newUser.password = hash;
	        newUser.save(callback);
// 	    });
// 	});
}

module.exports.getHospitalByName = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getHospitalById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}