/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('payment', function () {
  var scope = undefined,
      element = undefined;

  beforeEach(module('pharzoneCart', 'pharzone-cart/payment-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<payment></payment>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().payment.name).toEqual('payment');
  });
});