/**
 * Created by aguard on 07/09/14.
 */

angular.module('weatherApp')
    .controller('WeatherCtrl', ['$scope', 'weatherData', function($scope, weatherData) {

        $scope.weatherData = weatherData;

        var localTime = weatherData.currently.time;
        localTime = localTime.toString();

        $scope.currentTime = ;
    }]);