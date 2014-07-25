/**
 * Created by aguard on 7/16/14.
 */

angular.module('weatherApp')
    .controller('LoginCtrl', ['$q', '$http', '$scope', '$route', '$routeParams', '$location', function($q, $http, $scope, $route, $routeParams, $location) {

        var usersRestPoint = 'http://localhost:3000/collections/weatherAppData';

        $scope.login = {
            name: '',
            password: ''
        };

        // TODO - move this to a service
        function getUserData() {
            var deferred = $q.defer();
            $http.get(usersRestPoint)
                .success(function(users) {
                    deferred.resolve(users);
                })
                .error(function(error) {
                    console.error('Error: ' + error);
                });
            return deferred.promise;
        }

        $scope.userLogin = function() {

            getUserData().then(function(users) {
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
                "name": $scope.signup.name,
                "password": $scope.signup.password
                        };
            var deferred = $q.defer();
            $http.post(usersRestPoint, user)
                .success(function(user) {
                    deferred.resolve(user);
                    console.log('post success');
                    $location.path('/map');
                })
                .error(function(error) {
                    console.error('Error: ' + error);
                });
        }
    }]);
