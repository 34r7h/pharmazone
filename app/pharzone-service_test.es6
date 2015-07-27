/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('Pharzone', () => {
  let service;

  beforeEach(module('pharzone'));

  beforeEach(inject((Pharzone) => {
    service = Pharzone;
  }));

  it('should equal Pharzone', () => {
    expect(service.get()).toEqual('Pharzone');
  });
});
