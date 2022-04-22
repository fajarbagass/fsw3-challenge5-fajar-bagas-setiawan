const express = require('express');
const Controller = require('../controllers/cars.controller');
const router = express.Router();

router.get('/', (req, res) => {
    Controller.getAll(req, res);
})

router.get('/addCar', (req, res) => {
    res.render('addCar');
})

router.post('/create', (req, res) => {
    Controller.create(req, res);
})

router.get('/:id', (req, res) => {
    Controller.getById(req, res);
})

router.get('/edit/:id', (req, res) => {
    Controller.updateCar(req, res);
})

router.post('/edit/:id', (req, res) => {
    Controller.update(req, res);
})

router.get('/delete/:id', (req, res) => {
    Controller.delete(req, res);
})

module.exports = router;