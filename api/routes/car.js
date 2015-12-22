module.exports = function(app) {
    var controller = app.controllers.car;
    app.route('/cars').get(controller.listaCars).post(controller.salvaCar);
    app.route('/cars/:id').get(controller.obtemCars);
    
}