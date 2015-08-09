/*global describe, beforeEach, it, browser, expect */
'use strict';

import PharzoneCommonPage from './pharzone-common.po';

describe('Pharzone common page', () => {
  let pharzoneCommonPage;

  beforeEach(() => {
    pharzoneCommonPage = new PharzoneCommonPage();
    browser.get('/#/pharzone-common');
  });

  it('should say PharzoneCommonCtrl', () => {
    expect(pharzoneCommonPage.heading.getText()).toEqual('pharzoneCommon');
    expect(pharzoneCommonPage.text.getText()).toEqual('PharzoneCommonCtrl');
  });
});
