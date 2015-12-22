angular.module('car-parking').factory('Car', function($resource){
    return $resource('/cars/:id');
});