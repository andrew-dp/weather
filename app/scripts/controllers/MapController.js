/**
 * Created by aguard on 7/10/14.
 */

angular.module('weatherApp')
    .controller('MapCtrl', ['$scope', 'logisticsService',  function($scope, logisticsService) {

        $scope.map = {
            center: {
                latitude: 41.90,
                longitude: -87.70
            },
//            zoom: 11,
            zoom: 5,
//          required for event handling: http://angular-google-maps.org/faq#!/faq
            events: {
                tilesloaded: function (map) {
                    $scope.$apply(function () {
                        $scope.mapInstance = map;
                    });
                }
            }
        };

        var lat;
        var lon;

        $scope.searchLocationMarker = {
            coords: {
                latitude: 41.90,
                longitude: -87.70
            },
            options: { draggable: true },
            events: {
                dragend: function (marker, eventName, args) {
                    $scope.$apply(function () {
                        lat = marker.getPosition().lat();
                        lon = marker.getPosition().lng();

                        logisticsService.latitude = marker.getPosition().lat();
                        logisticsService.longitude = marker.getPosition().lng();

                        console.log('lat: ' + lat);
                        console.log('lon: ' + lon);
                    });
                }
            }
        };

        console.log('wee: ' + logisticsService.latitude);
        console.log('woo: ' + logisticsService.longitude);

        $scope.coordinates = logisticsService;

//        $scope.coordinates.latitude = draggedLat;
//        $scope.coordinates.longitude = draggedLon;
    }]);