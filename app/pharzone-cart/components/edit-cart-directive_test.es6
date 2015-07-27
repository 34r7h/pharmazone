/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('editCart', () => {
  let scope
    , element;

  beforeEach(module('pharzoneCart', 'pharzone-cart/edit-cart-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<edit-cart></edit-cart>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().editCart.name).toEqual('editCart');
  });
});
