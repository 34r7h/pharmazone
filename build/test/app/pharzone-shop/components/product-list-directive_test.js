/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('productList', function () {
  var scope = undefined,
      element = undefined;

  beforeEach(module('pharzoneShop', 'pharzone-shop/product-list-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<product-list></product-list>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().productList.name).toEqual('productList');
  });
});