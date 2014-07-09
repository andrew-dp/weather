/**
 * Created by aguard on 7/9/14.
 */

angular.module('weatherApp').service('WeatherData', function($q, $http, FORECAST_BASE_URL) {

    function getChicagoData() {

        var chiLatitude = 41.85;
        var chiLongitude = -87.65;
        var chicagoRestPoint = FORECAST_BASE_URL +  '/' + chiLatitude + chiLongitude;

        console.log('chicagoRestPoint: ' + chicagoRestPoint);

        var deferred = $q.defer();

        $http.get(chicagoRestPoint).then(function(response) {
            deferred.resolve(response.data);
        });

        console.log('woo');
        console.log(deferred.promise);
        return deferred.promise;
    };


//  The public API
    return {
        getChicagoWeather: function() {
            return getChicagoData();
        }
    }
});
