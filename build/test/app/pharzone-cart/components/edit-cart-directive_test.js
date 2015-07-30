/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('editCart', function () {
  var scope = undefined,
      element = undefined;

  beforeEach(module('pharzoneCart', 'pharzone-cart/edit-cart-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<edit-cart></edit-cart>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().editCart.name).toEqual('editCart');
  });
});