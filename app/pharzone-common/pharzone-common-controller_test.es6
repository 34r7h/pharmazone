/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('PharzoneCommonCtrl', () => {
  let ctrl;

  beforeEach(module('pharzoneCommon'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('PharzoneCommonCtrl');
  }));

  it('should have ctrlName as PharzoneCommonCtrl', () => {
    expect(ctrl.ctrlName).toEqual('PharzoneCommonCtrl');
  });
});
