var User = require('../models/user');

// GET /login.
// Login Page
exports.getLogin  = function(req, res) {
    res.render('login', { title: 'Login' });
};


// POST /login.
// Login using username and password
exports.postLogin  = function(req, res) {
    res.send('NOT IMPLEMENTED: Login POST');
};


// GET /logout.
// Logout
exports.getLogout  = function(req, res) {
    res.send('NOT IMPLEMENTED: Logout GET');
};


// GET /signup.
// Signup Page
exports.getSignup  = function(req, res) {
    res.render('signup', { title: 'Signup' });
};


// POST /signup.
// Signup Page
exports.postSignup  = function(req, res) {
    res.send('NOT IMPLEMENTED: Signup POST');
};