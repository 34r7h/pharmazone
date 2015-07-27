/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('PharzoneCart', () => {
  let service;

  beforeEach(module('pharzoneCart'));

  beforeEach(inject((PharzoneCart) => {
    service = PharzoneCart;
  }));

  it('should equal PharzoneCart', () => {
    expect(service.get()).toEqual('PharzoneCart');
  });
});
