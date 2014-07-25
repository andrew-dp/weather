/**
 * Created by aguard on 7/25/14.
 */

angular.module('weatherApp')
    .service('userAuthService', ['$q', '$http', '$location', function($q, $http, $location) {

        var usersRestPoint = 'http://localhost:3000/collections/weatherAppData';

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

        function createUserData(user) {
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

        // The public API
        return {
            getUser: function() {
                return getUserData();
            },
            createUser: function(user) {
                return createUserData(user);
            }
        };
    }]);
