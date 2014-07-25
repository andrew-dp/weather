/**
 * Created by aguard on 7/16/14.
 */

angular.module('weatherApp')
    .controller('LoginCtrl', ['$q', '$http', '$scope', '$route', '$routeParams', '$location', function($q, $http, $scope, $route, $routeParams, $location) {

        $scope.login = {
            name: '',
            password: ''
        };

        function getUserData() {
            var deferred = $q.defer();
            $http.get('http://localhost:3000/collections/weatherAppData')
                .success(function(users) {
                    deferred.resolve(users);
                })
                .error(function(error) {
                    console.error('Error: ' + error);
                });
            return deferred.promise;
        }

        // get http://localhost:3000/collections/users
        $scope.userLogin = function() {

            getUserData().then(function(users) {

                for ( var i = 0; i < users.length; i++ ) {
                    if ( $scope.login.name === users[i].name && $scope.login.password === users[i].password ) {
                        $location.path('/map');
                    } else {
                        $location.path('/');
                        alert('Incorrect username or password');
                    }
                }
            });
        };

        $scope.signup = {
            name: '',
            password: ''
        };

//        // post http://localhost:3000/collections/users
        $scope.userSignup = function() {

        }
    }]);
