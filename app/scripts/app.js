'use strict';

angular.module('weatherApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute'])

  .constant('FORECAST_BASE_URL', 'https://api.forecast.io/forecast/2c278faafe07dd1e617dc3efcc1ae103')

  .config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/chicago', {
            templateUrl: 'views/chicago.html',
            controller: 'ChicagoCtrl',
            resolve: {
                chicagoWeatherData: ['$route', '$q', 'weatherData', function($route, $q, weatherData) {
                    var deferred = $q.defer();
                    weatherData.getChicagoWeather().then(function(response) {
                       deferred.resolve(response);
                    }, function(error) {
                        alert(error.message);
                        deferred.reject(error);
                    });
                    return deferred.promise;
                }]
            }
        })
      .otherwise({
        redirectTo: '/'
      });
  }]);
