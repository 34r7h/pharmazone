/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('PharzoneDashboard', () => {
  let service;

  beforeEach(module('pharzoneDashboard'));

  beforeEach(inject((PharzoneDashboard) => {
    service = PharzoneDashboard;
  }));

  it('should equal PharzoneDashboard', () => {
    expect(service.get()).toEqual('PharzoneDashboard');
  });
});
