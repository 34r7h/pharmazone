/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('productList', () => {
  let scope
    , element;

  beforeEach(module('pharzoneShop', 'pharzone-shop/product-list-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<product-list></product-list>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().productList.name).toEqual('productList');
  });
});
