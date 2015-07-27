/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('PharzoneHome', () => {
  let service;

  beforeEach(module('pharzoneHome'));

  beforeEach(inject((PharzoneHome) => {
    service = PharzoneHome;
  }));

  it('should equal PharzoneHome', () => {
    expect(service.get()).toEqual('PharzoneHome');
  });
});
