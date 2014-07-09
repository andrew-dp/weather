/**
 * Created by aguard on 07/09/14.
 */

angular.module('weatherApp')
    .controller('ChicagoCtrl', ['$scope', 'chicagoWeatherData', function($scope, chicagoWeatherData) {

        $scope.chicagoWeatherData = chicagoWeatherData;
    }]);