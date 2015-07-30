/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('product', function () {
  var scope = undefined,
      element = undefined;

  beforeEach(module('pharzoneShop', 'pharzone-shop/product-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<product></product>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().product.name).toEqual('product');
  });
});