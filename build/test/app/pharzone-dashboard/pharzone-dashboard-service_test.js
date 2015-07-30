/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('PharzoneDashboard', function () {
  var service = undefined;

  beforeEach(module('pharzoneDashboard'));

  beforeEach(inject(function (PharzoneDashboard) {
    service = PharzoneDashboard;
  }));

  it('should equal PharzoneDashboard', function () {
    expect(service.get()).toEqual('PharzoneDashboard');
  });
});