(() => {
  'use strict';

  class PharzoneHome {
    constructor(Pharzone) {
      this.test = Pharzone.test;
    }

    get() {
      return 'PharzoneHome';
    }
  }

  /**
   * @ngdoc service
   * @name pharzoneHome.service:PharzoneHome
   *
   * @description
   *
   */
  angular
    .module('pharzoneHome')
    .service('PharzoneHome', PharzoneHome);
}());
