/**
 * Created by aguard on 7/9/14.
 */

angular.module('weatherApp').service('weatherDataService', function($q, $http, FORECAST_BASE_URL) {

    function getWeatherData() {

        var latitude = 41.85;
        var longitude = -87.65;

        var chicagoRestPoint = FORECAST_BASE_URL + '/' + latitude + ',' + longitude + '?callback=JSON_CALLBACK';
        var deferred = $q.defer();

//      jsonp request - publicly exposes API key - not secure - use CORS for better security
        $http.jsonp(chicagoRestPoint).then(function(response) {
            deferred.resolve(response.data);
        });
        return deferred.promise;
    }

//  The public API
    return {
        getWeather: function() {
            return getWeatherData();
        }
    };
});
