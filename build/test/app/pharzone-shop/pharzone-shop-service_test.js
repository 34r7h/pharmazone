/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('PharzoneShop', function () {
  var service = undefined;

  beforeEach(module('pharzoneShop'));

  beforeEach(inject(function (PharzoneShop) {
    service = PharzoneShop;
  }));

  it('should equal PharzoneShop', function () {
    expect(service.get()).toEqual('PharzoneShop');
  });
});