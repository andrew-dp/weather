/**
 * Created by aguard on 7/16/14.
 */

angular.module('weatherApp')
    .controller('LoginCtrl', ['$q', '$http', '$scope', '$route', '$routeParams', '$location', 'userAuthService', function($q, $http, $scope, $route, $routeParams, $location, userAuthService) {

        $scope.login = {
            name: '',
            password: ''
        };

        $scope.userLogin = function() {

            userAuthService.getUser().then(function(users) {
                for ( var i = 0; i < users.length; i++ ) {
                    if ( $scope.login.name === users[i].name && $scope.login.password === users[i].password ) {
                        $location.path('/map');
                        break;
                    }
                }
                if ( $location.path() === '/' ) {
                    alert('Wrong username or password');
                }
            });
        };

        $scope.signup = {
            name: '',
            password: ''
        };

        $scope.userSignup = function() {
            var user = {
                name: $scope.signup.name,
                password: $scope.signup.password
            };
            userAuthService.createUser(user);
        }
    }]);
