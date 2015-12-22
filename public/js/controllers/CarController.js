angular.module('car-parking').controller('CarController', function($scope, $routeParams, Car){
    
    if($routeParams.carId) {
        Car.get({id: $routeParams.carId}, 
                function(car){
                    $scope.car = car;
                 },
                function(erro){
                    $scope.mensagem = {
                        texto: 'Not found'
                    };
                 }
                );
    }else{
        $scope.car = {};
    }
    
    $scope.car = new Car();
    
    $scope.salva = function() {
      $scope.car.$save()
        .then(function() {
          $scope.mensagem = { texto: 'Car saved.' };
          $scope.car = new Car();
      })
      .catch(function(erro){
        $scope.mensagem = { texto: 'Erro'};
      })
    };
});
