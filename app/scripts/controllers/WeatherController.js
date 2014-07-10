/**
 * Created by aguard on 07/09/14.
 */

angular.module('weatherApp')
    .controller('WeatherCtrl', ['$scope', 'weatherData', function($scope, weatherData) {

        $scope.weatherData = weatherData;

        $scope.currentTime = moment.unix(weatherData.currently.time);

        $scope.hourlyData = weatherData.hourly.data;
    }]);