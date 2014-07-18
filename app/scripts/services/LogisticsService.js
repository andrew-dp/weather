/**
 * Created by aguard on 7/14/14.
 */

'use strict';

angular.module('weatherApp')
    .service('logisticsService', function () {

        var service = {
            model: {
                latitude: 41.92848580903533,
                longitude: -87.71262515783309
            }
        };
        return service;
    });
