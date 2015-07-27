/*global describe, beforeEach, it, browser, expect */
'use strict';

import PharzoneDashboardPage from './pharzone-dashboard.po';

describe('Pharzone dashboard page', () => {
  let pharzoneDashboardPage;

  beforeEach(() => {
    pharzoneDashboardPage = new PharzoneDashboardPage();
    browser.get('/#/pharzone-dashboard');
  });

  it('should say PharzoneDashboardCtrl', () => {
    expect(pharzoneDashboardPage.heading.getText()).toEqual('pharzoneDashboard');
    expect(pharzoneDashboardPage.text.getText()).toEqual('PharzoneDashboardCtrl');
  });
});
