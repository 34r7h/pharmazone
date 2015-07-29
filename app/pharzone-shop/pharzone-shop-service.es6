(() => {
  'use strict';

  class PharzoneShop {
    constructor(Pharzone, $log, PharzoneCart) {
      this.test = Pharzone.test;
      this.products = Pharzone.data.products;
      this.cart = PharzoneCart.cart;
      var productsIndex = {};
      angular.forEach(Pharzone.data.products,function(product){
        productsIndex[product.url]=product;
      });
      this.productsIndex = productsIndex;
      $log.debug(this.productsIndex);

/*TODO keep on indexing all day */

      var usersIndex = {}, deals = [], thisDeal = {};
      angular.forEach(Pharzone.data.users,function(user){
        usersIndex[user.name]=user;
        angular.forEach(user.deals.current, function(deal){
          thisDeal[deal.drug] = deal;
          deals.push(thisDeal);
        });
      });
      this.usersIndex = usersIndex;
      this.deals = deals;
      $log.debug(this.usersIndex, this.deals);
      this.cart = Pharzone.cart;
      this.addToCart = Pharzone.api.addToCart;
    }

    get() {
      return 'PharzoneShop';
    }
  }

  /**
   * @ngdoc service
   * @name pharzoneShop.service:PharzoneShop
   *
   * @description
   *
   */
  angular
    .module('pharzoneShop')
    .service('PharzoneShop', PharzoneShop);
}());
