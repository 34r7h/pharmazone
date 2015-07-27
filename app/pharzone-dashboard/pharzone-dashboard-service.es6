(() => {
  'use strict';

  class PharzoneDashboard {
    constructor(Pharzone) {
      this.test = Pharzone.test;

    }

    get() {
      return 'PharzoneDashboard';
    }
  }

  /**
   * @ngdoc service
   * @name pharzoneDashboard.service:PharzoneDashboard
   *
   * @description
   *
   */
  angular
    .module('pharzoneDashboard')
    .service('PharzoneDashboard', PharzoneDashboard);
}());
