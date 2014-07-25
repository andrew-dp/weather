/**
 * Created by aguard on 7/25/14.
 */

angular.module('weatherApp')
    .service('userAuthService', ['$q', '$http', function($q, $http) {

        // TODO - make this a constant
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

        // The public API
        return {
            getUser: function() {
                return getUserData();
            }
        };
    }]);