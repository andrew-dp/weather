/**
 * Created by aguard on 7/14/14.
 */

'use strict';

angular.module('weatherApp')
    .service('logisticsService', function () {

        var service = {
            model: {
                latitude: 41.928470287621316,
                longitude: -87.71240253448485
            }
        };
        return service;
    });
