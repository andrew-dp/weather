'use strict';

angular.module('weatherApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'angularMoment', 'google-maps'])

  .constant('FORECAST_BASE_URL', 'https://api.forecast.io/forecast/2c278faafe07dd1e617dc3efcc1ae103')

  .config(['$routeProvider', function ($routeProvider) {

//    delete $routeProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when('/', {
        templateUrl: '../views/map.html',
        controller: 'MapCtrl'
      })
        .when('/weather', {
            templateUrl: '../views/weather.html',
            controller: 'WeatherCtrl',
            resolve: {
                weatherData: ['$route', '$q', 'weatherDataService', function($route, $q, weatherDataService) {
                    var deferred = $q.defer();
//                  var latitude = 41.85;
//                  var longitude = -87.65;
                    weatherDataService.getWeather().then(function(response) {
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
