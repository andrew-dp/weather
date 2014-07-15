/**
 * Created by aguard on 7/10/14.
 */

angular.module('weatherApp')
    .controller('MapCtrl', ['$scope', 'logisticsService',  function($scope, logisticsService) {

        $scope.coordinates = logisticsService;

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
                },
                rightclick: function (event) {
                    $scope.$apply(function() {
                        $scope.lat = event.latLng.lat();
                        $scope.lng = event.latLng.lng();
                        alert("Lat=" + lat + "; Lng=" + lng);
                    });
                }
            }
        };

        $scope.searchLocationMarker = {
            coords: {
                latitude: 40.1451,
                longitude: -99.6680
            },
            options: { draggable: true },
            events: {
                dragend: function (marker, eventName, args) {
                    $log.log('marker dragend');
                    $log.log(marker.getPosition().lat());
                    $log.log(marker.getPosition().lng());
                }
            }
        };
        
    }]);