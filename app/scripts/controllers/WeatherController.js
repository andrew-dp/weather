/**
 * Created by aguard on 07/09/14.
 */

angular.module('weatherApp')
    .controller('WeatherCtrl', ['$scope', 'weatherData', 'moment', 'logisticsService', function($scope, weatherData, moment, logisticsService) {

        var time = moment.unix(weatherData.currently.time).format('dddd, MMMM Do YYYY, h:mm:ss a');

        $scope.currentTime = time;
        $scope.weatherData = weatherData;
        $scope.hourlyData = weatherData.hourly.data;

        var dailyWeatherData = weatherData.daily.data;
        var listOfDays = [];

        for (var i = 0; i < dailyWeatherData.length; i++) {
            var timestamp = dailyWeatherData[i].time;
            var momentDateObj = moment.unix(timestamp);
            var day = momentDateObj.format('dddd');
            listOfDays.push(day);
        }

        var formattedDailyData = [];

        for (var j = 0; j < dailyWeatherData.length; j++ ) {
            formattedDailyData[j] = {
                day : listOfDays[j],
                time : dailyWeatherData[j].time,
                summary : dailyWeatherData[j].summary,
                temperatureMax : dailyWeatherData[j].temperatureMax,
                temperatureMin : dailyWeatherData[j].temperatureMin
            };
        }

        $scope.dailyData = formattedDailyData;
    }]);
