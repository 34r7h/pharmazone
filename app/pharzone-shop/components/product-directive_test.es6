/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('product', () => {
  let scope
    , element;

  beforeEach(module('pharzoneShop', 'pharzone-shop/product-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<product></product>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().product.name).toEqual('product');
  });
});
