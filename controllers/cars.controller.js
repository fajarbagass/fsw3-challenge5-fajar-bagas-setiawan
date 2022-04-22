const { Car } = require('../models/index');

class Controller {
    static getAll(req, res){
        Car.findAll()
            .then(cars => {
                res.render('cars', { cars });
            })
            .catch(err => {
                res.send(err);
            })
    }
    static create(req, res){
        Car.create(req.body)
            .then(cars => {
                res.redirect('/cars');
            })
            .catch(err => {
                res.send(err);
            })
    }
    static getById(req, res){
        Car.findByPk(req.params.id)
            .then(cars => {
                res.status(200).json(cars);
            })
            .catch(err => {
                res.send(err);
            })
    }
    static updateCar(req, res){
        Car.findByPk(req.params.id)
            .then(cars => {
                res.render('editCar', { cars });
            })
            .catch(err => {
                res.send(err);
            })
    }
    static update(req, res){
        Car.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(cars => {
                res.redirect('/cars');
            })
            .catch(err => {
                res.send(err);
            })
    }
    static delete(req, res){
        Car.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(cars => {
                res.redirect('/cars');
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = Controller;