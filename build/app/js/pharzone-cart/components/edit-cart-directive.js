'use strict';

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzoneCart.directive:editCart
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzoneCart">
       <file name="index.html">
        <edit-cart></edit-cart>
       </file>
     </example>
   *
   */
  angular.module('pharzoneCart').directive('editCart', editCart);

  function editCart($log) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'pharzone-cart/components/edit-cart-directive.tpl.html',
      replace: false,
      controllerAs: 'editCart',
      controller: function controller(PharzoneCart) {
        $log.debug('Testing PharzoneCart service from edit-cart directive', PharzoneCart.test);
        var vm = this;
        vm.name = 'editCart';
        vm.cart = PharzoneCart.cart;
        vm.cartTotal = PharzoneCart.cartTotal;
        vm.checkout = PharzoneCart.checkout;
      },
      link: function link(scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
})();
//# sourceMappingURL=../../pharzone-cart/components/edit-cart-directive.js.map