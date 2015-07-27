/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('editProducts', () => {
  let scope
    , element;

  beforeEach(module('pharzoneDashboard', 'pharzone-dashboard/edit-products-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<edit-products></edit-products>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().editProducts.name).toEqual('editProducts');
  });
});
