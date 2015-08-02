'use strict';

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzoneDashboard.directive:editProducts
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzoneDashboard">
       <file name="index.html">
        <edit-products></edit-products>
       </file>
     </example>
   *
   */
  angular.module('pharzoneDashboard').directive('editProducts', editProducts);

  function editProducts($log) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'pharzone-dashboard/components/edit-products-directive.tpl.html',
      replace: false,
      controllerAs: 'editProducts',
      controller: function controller(PharzoneDashboard, $scope) {
        $log.debug('Testing PharzoneDashboard service from edit-products directive', PharzoneDashboard.test);
        var vm = this;
        vm.name = 'editProducts';
      },
      link: function link(scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
})();
//# sourceMappingURL=../../pharzone-dashboard/components/edit-products-directive.js.map