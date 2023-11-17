
const reservationController = require('../controllers/reservation.controller');
const reservationRouter = require('express').Router();

reservationRouter.route('/ADD')
.post(reservationController.addResa)
.all((res,req) => {
    res.statusCode(405).send('Login Unavalable')
});

module.exports = reservationRouter;