/**
 * Created by aguard on 7/14/14.
 */

'use strict';

angular.module('weatherApp')
    .service('logisticsService', function () {

        var service = {

            model: {
                latitude: '',
                longitude: ''
            }
        };

        return service;

//        var latitude;
//        var longitude;
//
//        var getLatitude = function() {
//            return latitude;
//        };
//
//        var setLatitude = function(lat) {
//            latitude = lat;
//        };
//
//        var getLongitude = function() {
//            return longitude;
//        };
//
//        var setLongitude = function(lon) {
//            longitude = lon;
//        };
//
////      The public API
//        return {
//            getLatitude: getLatitude,
//            getLongitude: getLongitude,
//            setLatitude:  setLatitude,
//            setLongitude: setLongitude
//        };
    });
