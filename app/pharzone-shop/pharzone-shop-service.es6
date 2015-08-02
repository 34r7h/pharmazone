(() => {
  'use strict';

  class PharzoneShop {
    constructor(Pharzone, $log, PharzoneCart) {
      this.test = Pharzone.test;
      this.db = Pharzone.data.db;
      this.products = Pharzone.data.products;
      this.cart = PharzoneCart.cart;

      var getDb = (()=>{
        setTimeout(()=>{
          if(Pharzone.data.products){
            let vm = this;
            vm.productsIndex = Pharzone.index.products;
          } else {
            getDb();
          }
        },500);
      })();

/*TODO keep on indexing all day */

      var usersIndex = {}, deals = [], thisDeal = {};

      var getDb = (()=>{
        setTimeout(()=>{
          if(Pharzone.data.users){
            let vm = this;
            vm.usersIndex = Pharzone.index.users;
            angular.forEach(Pharzone.data.users,function(user){
              usersIndex[user.name]=user;

              /*angular.forEach(user.deals.current, function(deal){
                thisDeal[deal.drug] = deal;
                deals.push(thisDeal);
              });*/
            });
            this.usersIndex = usersIndex;
            this.deals = deals;
          } else {
            getDb();
          }
        },500);
      })();




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
