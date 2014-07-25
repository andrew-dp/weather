/**
 * Created by aguard on 7/16/14.
 */

angular.module('weatherApp')
    .controller('LoginCtrl', ['$q', '$http', '$scope', '$route', '$routeParams', '$location', 'userAuthService', function($q, $http, $scope, $route, $routeParams, $location, userAuthService) {

        var usersRestPoint = 'http://localhost:3000/collections/weatherAppData';

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

            function user() {
                return {
                    name: $scope.signup.name,
                    password: $scope.signup.password
                };
            }

            userAuthService.createUser(user());

//            var deferred = $q.defer();
//            $http.post(usersRestPoint, user)
//                .success(function(user) {
//                    deferred.resolve(user);
//                    console.log('post success');
//                    $location.path('/map');
//                })
//                .error(function(error) {
//                    console.error('Error: ' + error);
//                });
        }
    }]);
