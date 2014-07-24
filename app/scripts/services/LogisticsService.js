/**
 * Created by aguard on 7/14/14.
 */

'use strict';

angular.module('weatherApp')
    .service('logisticsService', function () {

        var service = {
            model: {
//                chicago
//                latitude: 41.92848580903533,
//                longitude: -87.71262515783309

//                yanbu
                latitude: 24.09054914390534,
                longitude: 38.109327661991074
            }
        };
        return service;
    });
