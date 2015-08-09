'use strict';

(function () {
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
  angular.module('pharzoneShop').directive('product', product);

  function product($log) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'pharzone-shop/components/product-directive.tpl.html',
      replace: false,
      controllerAs: 'product',
      controller: function controller(PharzoneShop, $state, $scope) {
        var vm = this;
        var db = PharzoneShop.db;
        vm.productId = $state.params.product;
        vm.userId = $state.params.user;
        // TODO fix single products based on user & product id
        var getDb = (function () {
          setTimeout(function () {
            if (db.$$state.value) {
              $scope.$apply(function () {
                vm.productIndex = PharzoneShop.productsIndex[key];
                vm.product = db.$$state.value.products[vm.productIndex];
                $log.debug('vm.product', vm.product);
                vm.name = vm.productName;
                vm.addToCart = PharzoneShop.addToCart;
                vm.cart = PharzoneShop.cart;
                // $log.debug('Testing PharzoneShop service from product directive', PharzoneShop);
                /*vm.products.push({name:'fasdf'});
                 db.$$state.value.$save();*/
              });
            } else {
                getDb();
              }
          }, 500);
        })();
      },
      link: function link(scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
})();
//# sourceMappingURL=../../pharzone-shop/components/product-directive.js.map