/*global describe, beforeEach, it, browser, expect */
'use strict';

import PharzoneShopPage from './pharzone-shop.po';

describe('Pharzone shop page', () => {
  let pharzoneShopPage;

  beforeEach(() => {
    pharzoneShopPage = new PharzoneShopPage();
    browser.get('/#/pharzone-shop');
  });

  it('should say PharzoneShopCtrl', () => {
    expect(pharzoneShopPage.heading.getText()).toEqual('pharzoneShop');
    expect(pharzoneShopPage.text.getText()).toEqual('PharzoneShopCtrl');
  });
});
