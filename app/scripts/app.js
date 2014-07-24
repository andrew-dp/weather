'use strict';

angular.module('weatherApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'angularMoment', 'google-maps'])

  .constant('FORECAST_BASE_URL', 'https://api.forecast.io/forecast/2c278faafe07dd1e617dc3efcc1ae103')

  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

//    delete $routeProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
       .when('/', {
            templateUrl: '../views/login.html',
            controller: 'LoginCtrl'
        })
        .when('/map', {
            templateUrl: '../views/map.html',
            controller: 'MapCtrl'
        })
        .when('/weather', {
            templateUrl: '../views/weather.html',
            controller: 'WeatherCtrl',
            resolve: {
                weatherData: ['$route', '$q', 'weatherDataService', function($route, $q, weatherDataService) {
                    var deferred = $q.defer();
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
//        removes the # tag from routing, prevents hard refresh
//        $locationProvider.html5Mode(true);
  }]);
