/*global describe, beforeEach, it, browser, expect */
'use strict';

import PharzoneCartPage from './pharzone-cart.po';

describe('Pharzone cart page', () => {
  let pharzoneCartPage;

  beforeEach(() => {
    pharzoneCartPage = new PharzoneCartPage();
    browser.get('/#/pharzone-cart');
  });

  it('should say PharzoneCartCtrl', () => {
    expect(pharzoneCartPage.heading.getText()).toEqual('pharzoneCart');
    expect(pharzoneCartPage.text.getText()).toEqual('PharzoneCartCtrl');
  });
});
