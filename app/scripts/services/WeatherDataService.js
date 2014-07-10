/**
 * Created by aguard on 7/9/14.
 */

angular.module('weatherApp')

    .service('weatherData', function($q, $http, FORECAST_BASE_URL) {

        function getChicagoData() {

            var chiLatitude = 41.85;
            var chiLongitude = -87.65;
            var chicagoRestPoint = FORECAST_BASE_URL + '/' + chiLatitude + ',' + chiLongitude;

            var deferred = $q.defer();

            $http.get(chicagoRestPoint).then(function(response) {
                deferred.resolve(response.data);
            });

            return deferred.promise;
        }

    //  The public API
        return {
            getChicagoWeather: function() {
                return getChicagoData();
            }
        }
    });
