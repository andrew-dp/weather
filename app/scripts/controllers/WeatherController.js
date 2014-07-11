/**
 * Created by aguard on 07/09/14.
 */

angular.module('weatherApp')
    .controller('WeatherCtrl', ['$scope', 'weatherData', 'moment', function($scope, weatherData, moment) {

        $scope.weatherData = weatherData;

        var time = moment.unix(weatherData.currently.time);
        time =  time.toDate();

        console.log('time: ' + time);

        $scope.currentTime = time;

        $scope.hourlyData = weatherData.hourly.data;

        $scope.dailyData = weatherData.daily.data;
    }]);