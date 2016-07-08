'use strict';

/**
 * @ngdoc overview
 * @name searchLocation
 * @description Aplicativo de busca de CEP e localizacao via latitude e longitude.
 */
angular
  .module('searchLocation', [
    'searchLocation.services',
    'searchLocation.directives'

  ])
  .constant("AppConfig", {
    "api_cep": "http://api.postmon.com.br/v1/cep/",
    "api_google": "http://maps.googleapis.com/maps/api/geocode/json?latlng=#{facebook_event.venue.latitude},#{facebook_event.venue.longitude}",
    "api_google_endereco": "http://maps.googleapis.com/maps/api/geocode/json?address="

  })

angular.module('searchLocation.services', []);
angular.module('searchLocation.directives', []);
