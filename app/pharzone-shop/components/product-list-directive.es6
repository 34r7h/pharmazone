(() => {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzoneShop.directive:productList
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzoneShop">
       <file name="index.html">
        <product-list></product-list>
       </file>
     </example>
   *
   */
  angular
    .module('pharzoneShop')
    .directive('productList', productList);

  function productList($log) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'pharzone-shop/components/product-list-directive.tpl.html',
      replace: false,
      controllerAs: 'productList',
      controller(PharzoneShop, $scope) {
        let vm = this;
        let db = PharzoneShop.db;
        vm.name = 'productList';
        vm.addToCart = PharzoneShop.addToCart;
        vm.cart = PharzoneShop.cart;
        var getDb = ()=> {
          setTimeout(()=> {
            if (db.$$state.value) {
              $scope.$apply( ()=> {
                vm.products = db.$$state.value.products;
                /*vm.products.push({name:'fasdf'});
                db.$$state.value.$save();*/
              });
            } else {getDb();}

          }, 500);
        };
        getDb();
      },
      link(scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
