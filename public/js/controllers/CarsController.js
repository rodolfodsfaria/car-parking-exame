angular.module('car-parking').controller('CarsController', function($scope, Car){
    
    $scope.cars = [];
    
    $scope.filtro ='';
    
    $scope.mensagem = {texto: ''};
    
    function buscaCars() {
        Car.query(
            function(cars) {
                $scope.cars = cars;
                $scope.mensagem ={};
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Erro'
                };
            }
           );
    }
    buscaCars();
    
});