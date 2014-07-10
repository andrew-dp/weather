/**
 * Created by aguard on 7/9/14.
 */

angular.module('weatherApp').service('weatherDataService', function($q, $http, FORECAST_BASE_URL) {

    function getChicagoData() {

//        var chiLatitude = 41.85;
//        var chiLongitude = -87.65;
//        var chicagoRestPoint = FORECAST_BASE_URL + '/' + chiLatitude + ',' + chiLongitude + '?callback=JSON_CALLBACK';

        var alcatraz = 'https://api.forecast.io/forecast/2c278faafe07dd1e617dc3efcc1ae103/37.8267,-122.423?callback=JSON_CALLBACK';
        var deferred = $q.defer();

//      jsonp for a CORS request - publicly exposes API key - not secure
        $http.jsonp(alcatraz).then(function(response) {
            deferred.resolve(response.data);
        });

        return deferred.promise;
    }

//  The public API
    return {
        getChicagoWeather: function() {
            return getChicagoData();
        }
    };
});
