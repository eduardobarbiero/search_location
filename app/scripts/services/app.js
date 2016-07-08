'use strict';
angular.module('searchLocation.services')
  .factory('AppService', function($http, AppConfig) {

    function getDataCEP(busca) {
      var _params = {}

      return $http.get(AppConfig.api_cep + busca, _params)
         .then(getResultsComplete)
           .catch(getResultsFailed);

      function getResultsComplete(response) {
        return response.data;
      }

      function getResultsFailed(error) {
        console.error('Erro ao buscar: ' + error.data);
      }
    }

    function getDataByAddress(address){
      return $http.get(AppConfig.api_google_endereco + address)
         .then(getResultsComplete)
           .catch(getResultsFailed);

      function getResultsComplete(response) {
        return response.data;
      }

      function getResultsFailed(error) {
        console.error('Erro ao buscar: ' + error.data);
      }
    }

    return {
      getData: getDataCEP,
      getDataByAddress: getDataByAddress
    };
  });
