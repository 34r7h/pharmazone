/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('payment', () => {
  let scope
    , element;

  beforeEach(module('pharzoneCart', 'pharzone-cart/payment-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<payment></payment>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().payment.name).toEqual('payment');
  });
});
