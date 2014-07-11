/**
 * Created by aguard on 07/09/14.
 */

angular.module('weatherApp')
    .controller('WeatherCtrl', ['$scope', 'weatherData', 'moment', function($scope, weatherData, moment) {

        var time = moment.unix(weatherData.currently.time);
        time =  time.toDate();

        $scope.currentTime = time;
        $scope.weatherData = weatherData;
        $scope.hourlyData = weatherData.hourly.data;

        var dailyWeatherData = weatherData.daily.data;
        var listOfDays = [];

        for (var i = 0; i < dailyWeatherData.length; i++ ) {
            var timestamp = dailyWeatherData[i].time;
            var momentDateObj = moment.unix(timestamp);
            var day = momentDateObj.format('dddd');
            listOfDays.push(day);
        }

        $scope.dailyDataDays = listOfDays;

        $scope.dailyData = weatherData.daily.data;

    }]);