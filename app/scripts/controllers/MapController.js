/**
 * Created by aguard on 7/10/14.
 */

angular.module('weatherApp')
    .controller('MapCtrl', ['$scope', 'logisticsService', function($scope, logisticsService) {

//        var longitude = $scope.longitude;
//        var latitude = $scope.latitude;

//        logisticsService.setLongitude(longitude);
//        logisticsService.setLatitude(latitude);

        $scope.coordinates = logisticsService;

//        $scope.saveEntry = function() {
//
//        };

        $scope.map = {
            center: {
                latitude: 41.85,
                longitude: -87.65
            },
            zoom: 8,
//          required for event handling: http://angular-google-maps.org/faq
            events: {
                tilesloaded: function (map) {
                    $scope.$apply(function () {
                        $scope.mapInstance = map;
                    });
                }
            }
        };
    }]);
