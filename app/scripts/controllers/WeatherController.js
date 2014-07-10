/**
 * Created by aguard on 07/09/14.
 */

angular.module('weatherApp')
    .controller('WeatherCtrl', ['$scope', 'weatherData', function($scope, weatherData) {

        $scope.weatherData = weatherData;

        var localTime = moment.unix(weatherData.currently.time);
//        localTime = localTime.toDate();

        $scope.currentTime = localTime;
    }]);