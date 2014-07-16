/**
 * Created by aguard on 7/10/14.
 */

angular.module('weatherApp')
    .controller('MapCtrl', ['$scope', 'logisticsService',  function($scope, logisticsService) {

        $scope.coordinates = logisticsService.model;

        $scope.map = {
            center: {
                latitude: logisticsService.model.latitude,
                longitude: logisticsService.model.longitude
            },
            zoom: 3,
            options: {
                mapTypeId: google.maps.MapTypeId.SATELLITE
            }
        };

        $scope.searchLocationMarker = {

            coords: {
                latitude: logisticsService.model.latitude,
                longitude: logisticsService.model.longitude
            },

            options: {
                draggable: true
            },

            events: {
                dragend: function (marker, eventName, args) {
                    $scope.$apply(function () {

                        logisticsService.model.latitude = marker.getPosition().lat();
                        logisticsService.model.longitude = marker.getPosition().lng();

                        $scope.$watch(function () { return logisticsService.model }, function (newVal, oldVal) {
                            if (typeof newVal !== 'undefined') {
                                $scope.coordinates = logisticsService.model;
                            }
                        });
                    });
                }
            }
        };
    }]);
