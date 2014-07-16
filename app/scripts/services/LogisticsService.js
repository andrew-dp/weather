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

        console.log('in log service');
        return service;
    });
