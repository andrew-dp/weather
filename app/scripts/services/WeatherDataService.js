/**
 * Created by aguard on 7/9/14.
 */

angular.module('weatherApp')
    .service('weatherDataService', ['$q', '$http', 'FORECAST_BASE_URL', 'logisticsService', function($q, $http, FORECAST_BASE_URL, logisticsService) {

        function getWeatherData() {

            var latitude = logisticsService.model.latitude;
            var longitude = logisticsService.model.longitude;

//            console.log('lat in weather service:' + latitude);
//            console.log('lon in weather service: ' + longitude);

            var chicagoRestPoint = FORECAST_BASE_URL + '/' + latitude + ',' + longitude + '?callback=JSON_CALLBACK';
            var deferred = $q.defer();

    //      jsonp request - publicly exposes API key - not secure
    //      TODO - use CORS
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
    }]);
