(() => {
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
  angular
    .module('pharzoneCart')
    .directive('payment', payment);

  function payment($log, $state) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'pharzone-cart/components/payment-directive.tpl.html',
      replace: false,
      controllerAs: 'payment',
      controller(PharzoneCart) {
        $log.debug('Testing PharzoneCart service from payment directive', PharzoneCart.test);
        let vm = this;
        vm.name = 'payment';
        vm.promise = PharzoneCart.promise;
        vm.order = PharzoneCart.orders;
        setTimeout(()=>{$log.debug('order for payment',vm.order);
        },2000);
/*
        vm.order = PharzoneCart.orders.$$state.value[$state.params.order];
*/
        $log.debug('order for payment',vm);
      },
      link(scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
