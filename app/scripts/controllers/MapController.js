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

        $scope.coordinates = logisticsService.model;

        $scope.searchLocationMarker = {

            coords: {
                latitude: 41.90,
                longitude: -87.70
            },

            options: {
                draggable: true
            },

            events: {
                dragend: function (marker, eventName, args) {
                    $scope.$apply(function () {
                        lat = marker.getPosition().lat();
                        lon = marker.getPosition().lng();

                        logisticsService.model.latitude = marker.getPosition().lat();
                        logisticsService.model.longitude = marker.getPosition().lng();

                        console.log('lat: ' + lat);
                        console.log('lon: ' + lon);

                        $scope.$watch(function () { return logisticsService.model }, function (newVal, oldVal) {
                            if (typeof newVal !== 'undefined') {
                                $scope.coordinates = logisticsService.model;
                                console.log('lat in watch: ' + logisticsService.model.latitude);
                                console.log('lng in watch: ' + logisticsService.model.longitude);
                            }
                        });

                    });
                }
            }
        };

//        console.log('wee: ' + )
//        $scope.coordinates = logisticsService;

//        $scope.coordinates.latitude = draggedLat;
//        $scope.coordinates.longitude = draggedLon;
    }]);