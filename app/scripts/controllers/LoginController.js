/**
 * Created by aguard on 7/16/14.
 */

angular.module('weatherApp')
    .controller('LoginCtrl', ['$scope', '$location', function($scope, $location) {

        $scope.loginUser = function() {

            if ($scope.username == 'andrew') {

//                need to watch? add a service? perchance
                console.log($scope.username);

                $location.path('/#/map');

//                if ($scope.password === 'wat') {
//                    $location.path('/#/map');
//                } else {
//                    $location.path('/#/map');
//                }
            } else {
                $location.path('/#/map');
            }
        };
    }]);
