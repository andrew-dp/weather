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
                $location.path('/map');
                console.log('wat1')

            } else {
                $location.url('/');
                console.log('not wat');
            }
        };
    }]);
