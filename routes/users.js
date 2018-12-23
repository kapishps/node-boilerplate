var express = require('express');
var router = express.Router();
const passport = require('passport');

// Require controller modules.
var user_controller = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/login', user_controller.getLogin);

router.post('/login', passport.authenticate('local', { failureRedirect: '/users/login' }),
    user_controller.postLogin);

router.get('/logout', user_controller.getLogout);

router.get('/signup', user_controller.getSignup);

router.post('/signup', user_controller.postSignup);

module.exports = router;
