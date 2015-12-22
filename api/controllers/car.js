module.exports = function(app) {
        var sanitize = require('mongo-sanitize');
    
    var Car = app.models.car;
    
    var controller = {};

    controller.listaCars = function(req, res) {
         var promise = Car.find().exec()
            .then(
                function(car){
                    res.json(car);
                },
                function(erro){
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
    };
    
    controller.obtemCars = function(req, res) {
        var _id = req.params.id;
        Car.findById(_id).exec()
        .then(
            function(car) {
                if(!car) throw new Error("Not Found");
                res.json(car);
            },
            function(erro) {
                console.log(error);
                res.status(404).json(erro);
            }
        );
    };
    
  controller.salvaCar = function (req, res) {
        var _id = req.body._id;
        
        var dados = {
            "license_plate" : req.body.license_plate,
            "checkin" : req.body.checkin,
            "checkout" : req.body.checkout
        };
        
        if(_id){
            Car.findByIdAndUpdate(_id, dados).exec()
            .then(
                function(car){
                    res.json(car);
                },
                function(erro){
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        }else {
            Car.create(dados)
            .then(
                function(car) {
                    res.status(201).json(car);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                }
            );
        }
    };
        return controller;
    
    return controller;
}