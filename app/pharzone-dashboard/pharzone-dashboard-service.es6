(() => {
  'use strict';

  class PharzoneDashboard {
    constructor(Pharzone) {
      this.test = Pharzone.test;
      this.db = Pharzone.data.db;
      this.newDeal = Pharzone.api.make;
      this.save = Pharzone.api.save;
      this.products = Pharzone.data.db.products;
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
