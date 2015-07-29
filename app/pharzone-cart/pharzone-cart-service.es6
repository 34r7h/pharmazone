(() => {
  'use strict';

  class PharzoneCart {
    constructor(Pharzone) {
      this.test = Pharzone.test;
      this.cart = Pharzone.cart;
      this.cartTotal = Pharzone.api.cartTotal;
      this.checkout = Pharzone.api.checkout;

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
