const express = require('express');
const router = express.Router();

const carsRoute = require('./cars.route');

//Home
router.get('/', (req, res) => {
    res.render('home');
})

// Cars
router.use('/cars', carsRoute);

module.exports = router;