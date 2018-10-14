var express = require('express');
var router = express.Router();

// Require controller modules.
var screen_controller = require('../controllers/screensController');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', screen_controller.postScreen);

router.post('/:screenName/reserve', screen_controller.postReserve);

router.get('/:screenName/seats?status=:status', screen_controller.getAvailableSeatsScreen);

router.get('/:screenName/seats?numSeats=:numOfSeats&choice=:seatChoice', screen_controller.getAvailableSeatsPos);

module.exports = router;
