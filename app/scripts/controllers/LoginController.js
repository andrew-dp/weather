/**
 * Created by aguard on 7/16/14.
 */

angular.module('weatherApp')
    .controller('LoginCtrl', ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {

        $scope.user = {
            name: '',
            password: ''
        };

        $scope.auth = function() {

            if ( $scope.user.name === 'wat' ) {
                if ( $scope.user.password === 'woo' ) {
                    $location.path('/map');
                } else {
                    $location.url('/');
                    alert('password must be woo');
                }

            } else {
                $location.url('/');
                alert('username must be wat');
            }
        };
    }]);
