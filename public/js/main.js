angular.module('car-parking', ['ngRoute', 'ngResource']).config(function($routeProvider) {
    $routeProvider.when('/cars', {
        templateUrl: 'partials/cars.html',
        controller: 'CarsController'
    });
        
    $routeProvider.when('/car/:carId', {
        templateUrl: 'partials/car.html',
        controller: 'CarController'
    });
    
    $routeProvider.when('/car', {
        templateUrl: 'partials/car.html',
        controller: 'CarController'
    });
    
    $routeProvider.when('/', {
        templateUrl: 'partials/cars.html',
        controller: 'CarsController'
    });

});