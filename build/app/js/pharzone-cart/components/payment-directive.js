'use strict';

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzoneCart.directive:payment
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzoneCart">
       <file name="index.html">
        <payment></payment>
       </file>
     </example>
   *
   */
  angular.module('pharzoneCart').directive('payment', payment);

  function payment($log) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'pharzone-cart/components/payment-directive.tpl.html',
      replace: false,
      controllerAs: 'payment',
      controller: function controller(PharzoneCart) {
        $log.debug('Testing PharzoneCart service from payment directive', PharzoneCart.test);
        var vm = this;
        vm.name = 'payment';
      },
      link: function link(scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
})();
//# sourceMappingURL=../../pharzone-cart/components/payment-directive.js.map