/**
 * Created by aguard on 7/10/14.
 */

angular.module('weatherApp')
    .controller('MapCtrl', ['$scope', function($scope) {

        $scope.map = {
            center: {
                latitude: 41.85,
                longitude: -87.65
            },
            zoom: 8
        }
    }]);
