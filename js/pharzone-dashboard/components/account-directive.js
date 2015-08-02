'use strict';

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzoneDashboard.directive:account
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzoneDashboard">
       <file name="index.html">
        <account></account>
       </file>
     </example>
   *
   */
  angular.module('pharzoneDashboard').directive('account', account);

  function account($log) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'pharzone-dashboard/components/account-directive.tpl.html',
      replace: false,
      controllerAs: 'account',
      controller: function controller(PharzoneDashboard) {
        var vm = this;
        vm.name = 'account';
      },
      link: function link(scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
})();
//# sourceMappingURL=../../pharzone-dashboard/components/account-directive.js.map