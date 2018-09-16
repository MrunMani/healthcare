var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var Hospital = require('../models/hospital');

// Register
router.get('/register', function (req, res) {
	res.render('hospitalregister');
});

// Login
router.get('/login', function (req, res) {
	res.render('hospitallogin');
});

// Register User
router.post('/hospitalregister', function (req, res) {
    var name = req.body.name;
    var regestration_id = req.body.regId;
    var no_of_doctors = req.body.docs;
    var no_of_consultants = req.body.colsultants;
    var total_beds = req.body.beds;
    var private_wards = req.body.wards;
    var no_of_beds_for_ews = req.body.ews;
    var emergency_services = 1;
    var proof_of_reg = 'adrak';
    var address = req.body.address;
        

	// Validation
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('regId', 'Regestration Id is required').notEmpty();
	req.checkBody('docs', 'No of Doctors is not valid').isEmpty();
	req.checkBody('consultants', 'No of consultants is required').notEmpty();
	req.checkBody('beds', 'Beds is required').notEmpty();
    req.checkBody('wards', 'Wards is required').notEmpty();
    req.checkBody('address', 'Addredd is required').notEmpty();
    // req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if (errors) {
		res.render('hospitalregister', {
			errors: errors
		});
	}
	// else {
		//checking for email and username are already taken
	// 	User.findOne({ name: { 
	// 		"$regex": "^" + name + "\\b", "$options": "i"
	// }}, function (err, user) {
	// 		User.findOne({ regestration_id: { 
	// 			"$regex": "^" + regestration_id + "\\b", "$options": "i"
	// 	}}, function (err, name) {
				// if (user || mail) {
				// 	res.render('register', {
				// 		user: user,
				// 		name: name
				// 	});
				// }
				// else {
					var newHospital = new Hospital({
						name: name,
						registeration_id: regestration_id,
						no_of_doctors: no_of_doctors,
                        no_of_consultants: no_of_consultants,
                        total_beds: total_beds,
                        private_wards: private_wards,
                        no_of_beds_for_ews: no_of_beds_for_ews,
                        emergency_services: emergency_services,
                        proof_of_reg: proof_of_reg,
                        address: address
					});
					Hospital.createUser(newHospital, function (err, user) {
						if (err) throw err;
						console.log(user);
					});
         	req.flash('success_msg', 'You are registered and can now login');
					res.redirect('/hospital/login');
				// }
	// 		});
	// 	});
	// }
});

passport.use(new LocalStrategy(
	function (name, password, done) {
		User.getHospitalByName(name, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}

			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getHospitalById (id, function (err, user) {
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
	function (req, res) {
		res.redirect('/');
	});

router.get('/logout', function (req, res) {
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});

module.exports = router;