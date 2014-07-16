'use strict';

angular.module('weatherApp')
    .directive('header', function () {
        return {
            restrict: 'E',
            templateUrl: '/views/header.html'
        };
    });
