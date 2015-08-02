(() => {
  'use strict';

  class PharzoneCart {
    constructor(Pharzone, $log) {
      $log.log('PharzoneCart');
      this.test = Pharzone.test;
      this.cart = Pharzone.cart;
      // this.db = Pharzone.data.db();
      this.cartTotal = Pharzone.api.cartTotal;
      this.checkout = Pharzone.api.checkout;
      this.getTime = Pharzone.api.getTime;
      this.promise = Pharzone.api.promise;
      // this.orders = Pharzone.data.orders;
      this.orders = this.promise(this, Pharzone.data.orders);

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
