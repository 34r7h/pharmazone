(() => {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzoneShop.directive:product
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzoneShop">
       <file name="index.html">
        <product></product>
       </file>
     </example>
   *
   */
  angular
    .module('pharzoneShop')
    .directive('product', product);

  function product($log) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'pharzone-shop/components/product-directive.tpl.html',
      replace: false,
      controllerAs: 'product',
      controller(PharzoneShop, $state, $scope) {
        let vm = this;
        let db = PharzoneShop.db;
        var url = $state.params.product;
        var getDb = (()=> {
          setTimeout(()=> {
            if (db.$$state.value) {
              $scope.$apply( ()=> {
                vm.productIndex = PharzoneShop.productsIndex[url];
                vm.product = db.$$state.value.products[vm.productIndex];
                // $log.debug('vm.product', vm.product);
                vm.name = vm.productName;
                vm.addToCart = PharzoneShop.addToCart;
                vm.cart = PharzoneShop.cart;
                // $log.debug('Testing PharzoneShop service from product directive', PharzoneShop);
                /*vm.products.push({name:'fasdf'});
                 db.$$state.value.$save();*/
              });
            } else {getDb();$log.debug('getting product directive data..');}

          }, 500);
        })();


      },
      link(scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
