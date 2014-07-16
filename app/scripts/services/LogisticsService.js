/**
 * Created by aguard on 7/14/14.
 */

'use strict';

angular.module('weatherApp')
    .service('logisticsService', function () {

        var service = {
            model: {
                latitude: 41.90,
                longitude: -87.70
            }
        };

        return service;
    });
