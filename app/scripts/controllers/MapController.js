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
            zoom: 5
        };

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
