/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('PharzoneHome', function () {
  var service = undefined;

  beforeEach(module('pharzoneHome'));

  beforeEach(inject(function (PharzoneHome) {
    service = PharzoneHome;
  }));

  it('should equal PharzoneHome', function () {
    expect(service.get()).toEqual('PharzoneHome');
  });
});