/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('editProducts', function () {
  var scope = undefined,
      element = undefined;

  beforeEach(module('pharzoneDashboard', 'pharzone-dashboard/edit-products-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<edit-products></edit-products>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().editProducts.name).toEqual('editProducts');
  });
});