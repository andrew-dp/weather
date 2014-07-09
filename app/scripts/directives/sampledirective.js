'use strict';

angular.module('weatherApp')
  .directive('sampleDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the sampleDirective directive');
      }
    };
  });
