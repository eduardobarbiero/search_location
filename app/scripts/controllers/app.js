'use strict';

angular.module('searchLocation')
.controller('AppCtrl', function($scope, AppService) {

  $scope.result = {};

  $scope.return = false;

  $scope.getData = function(busca) {
    AppService.getData(busca).then(function (result) {
      $scope.result = result;
      $scope.return = true;
    });
  },

  $scope.addMarker = function(address){
    AppService.getDataByAddress(address).then(function (result) {
      add_marker(result.results[0].geometry.location.lat, result.results[0].geometry.location.lng, address)
    });
  }

});
