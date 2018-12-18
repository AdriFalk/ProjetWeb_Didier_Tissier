'use strict';

/* Controllers */

angular
  .module('TrainingControllers', [])
  .controller('TraingListCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('trainingVideo').success(function(data) {
      $scope.beers = data;
    });

    $scope.orderProp = 'level';
  }])
  .controller('TrainingDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    $http.get('trainingVideo/' + $routeParams.beerId).success(function(data) {
      $scope.beer = data;
      $scope.mainImg = $scope.beer.img;

      $scope.setImage = function(img) {
        $scope.mainImg = img;
      }
    });
  }]);
