'use strict';

angular.module('weatherApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute'])

  .constant('FORECAST_BASE_URL', 'https://api.forecast.io/forecast/2c278faafe07dd1e617dc3efcc1ae103')

  .config(['$routeProvider', function ($routeProvider) {

//    delete $routeProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
        .when('/chicago', {
            templateUrl: 'views/chicago.html',
            controller: 'ChicagoWeatherCtrl',
            resolve: {
                chicagoWeatherData: ['$route', '$q', 'weatherDataService', function($route, $q, weatherDataService) {
                    var deferred = $q.defer();
                    weatherDataService.getChicagoWeather().then(function(response) {
                       deferred.resolve(response);
                    }, function(error) {
                        alert(error.message);
                        deferred.reject(error);
                    });
                    console.log(deferred.promise);
                    return deferred.promise;
                }]
            }
        })
      .otherwise({
        redirectTo: '/'
      });
  }]);
