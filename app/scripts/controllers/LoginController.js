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
            // get users
            var deferred = $q.defer();
            $http.get('http://localhost:3000/collections/weatherAppData').then(function(response) {
                deferred.resolve(response.data);
            });
//                .success(function(users) {
//                    deferred.resolve(users);
//                })
//                .error(function(error) {
//                    console.error('Error: ' + error);
//                });
            return deferred.promise;
        }

        // get http://localhost:3000/collections/users
        $scope.userLogin = function() {

            getUserData().then(function(users) {
                for ( var i = 0; i < users.length; i++ ) {
                    console.log("user: " + users[i].name);
                }
            });



//            console.log(userData);
//            if ( $scope.user.name === 'wat' ) {
//                if ( $scope.user.password === 'woo' ) {
//                    $location.path('/map');
//                } else {
//                    $location.path('/');
//                    alert('password must be woo');
//                }
//            } else {
//                $location.path('/');
//                alert('username must be wat');
//            }
        };

        $scope.signup = {
            name: '',
            passowrd: ''
        };

//        // post http://localhost:3000/collections/users
        $scope.userSignup = function() {

        }
    }]);
