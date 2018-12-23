var User = require('../models/user');

// GET /login.
// Login Page
exports.getLogin  = function(req, res) {
    res.render('login', { title: 'Login' });
};


// POST /login.
// Login using username and password
exports.postLogin  = function(req, res) {
    res.send('SuccessFully Logged In');
};


// GET /logout.
// Logout
exports.getLogout  = function(req, res) {
    req.logout();
    res.redirect('/');
};


// GET /signup.
// Signup Page
exports.getSignup  = function(req, res) {
    res.render('signup', { title: 'Signup' });
};


// POST /signup.
// Signup Page
exports.postSignup  = function(req, res, next) {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    User.findOne({ email: req.body.email }, function(err, existingUser) {
        if (err) { return next(err); }
        if (existingUser) {
            req.flash('errors', { msg: 'Account with that email address already exists.' });
            return res.redirect('/signup');
        }
        user.save(function(err) {
            if (err) { return next(err); }
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
};