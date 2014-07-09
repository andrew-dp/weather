'use strict';

describe('Filter: sampleFilter', function () {

  // load the filter's module
  beforeEach(module('weatherApp'));

  // initialize a new instance of the filter before each test
  var sampleFilter;
  beforeEach(inject(function ($filter) {
    sampleFilter = $filter('sampleFilter');
  }));

  it('should return the input prefixed with "sampleFilter filter:"', function () {
    var text = 'angularjs';
    expect(sampleFilter(text)).toBe('sampleFilter filter: ' + text);
  });

});
