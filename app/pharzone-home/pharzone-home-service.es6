(() => {
  'use strict';

  class PharzoneHome {
    constructor() {
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
