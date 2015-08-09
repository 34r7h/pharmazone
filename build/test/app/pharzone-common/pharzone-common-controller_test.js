/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('PharzoneCommonCtrl', function () {
  var ctrl = undefined;

  beforeEach(module('pharzoneCommon'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PharzoneCommonCtrl');
  }));

  it('should have ctrlName as PharzoneCommonCtrl', function () {
    expect(ctrl.ctrlName).toEqual('PharzoneCommonCtrl');
  });
});