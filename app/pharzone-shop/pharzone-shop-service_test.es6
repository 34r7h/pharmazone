/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('PharzoneShop', () => {
  let service;

  beforeEach(module('pharzoneShop'));

  beforeEach(inject((PharzoneShop) => {
    service = PharzoneShop;
  }));

  it('should equal PharzoneShop', () => {
    expect(service.get()).toEqual('PharzoneShop');
  });
});
