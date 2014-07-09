'use strict';

describe('Directive: sampleDirective', function () {

  // load the directive's module
  beforeEach(module('weatherApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sample-directive></sample-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sampleDirective directive');
  }));
});
