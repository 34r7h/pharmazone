(() => {
  'use strict';

  class PharzoneCart {
    constructor(Pharzone) {
      this.test = Pharzone.test;
    }

    get() {
      return 'PharzoneCart';
    }
  }

  /**
   * @ngdoc service
   * @name pharzoneCart.service:PharzoneCart
   *
   * @description
   *
   */
  angular
    .module('pharzoneCart')
    .service('PharzoneCart', PharzoneCart);
}());
