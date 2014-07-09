'use strict';

angular.module('weatherApp')
  .filter('sampleFilter', function () {
    return function (input) {
      return 'sampleFilter filter: ' + input;
    };
  });
