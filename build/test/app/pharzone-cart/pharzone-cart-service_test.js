/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('PharzoneCart', function () {
  var service = undefined;

  beforeEach(module('pharzoneCart'));

  beforeEach(inject(function (PharzoneCart) {
    service = PharzoneCart;
  }));

  it('should equal PharzoneCart', function () {
    expect(service.get()).toEqual('PharzoneCart');
  });
});