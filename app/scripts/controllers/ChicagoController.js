/**
 * Created by aguard on 07/09/14.
 */

angular.module('weatherApp')
    .controller('ChicagoWeatherCtrl', ['$scope', 'chicagoWeatherData', function($scope, chicagoWeatherData) {

        $scope.chicagoWeatherData = chicagoWeatherData;

//        var currentWeather = chicagoWeatherData.currently;
//        $scope.currentWeather = currentWeather;
//        console.log(currentWeather);
    }]);