/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('account', () => {
  let scope
    , element;

  beforeEach(module('pharzoneDashboard', 'pharzone-dashboard/account-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<account></account>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().account.name).toEqual('account');
  });
});
