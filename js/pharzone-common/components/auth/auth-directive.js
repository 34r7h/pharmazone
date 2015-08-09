'use strict';

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzoneCommon.directive:auth
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzoneCommon">
       <file name="index.html">
        <auth></auth>
       </file>
     </example>
   *
   */
  angular.module('pharzoneCommon').directive('auth', auth);

  function auth() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'pharzone-common/components/auth/auth-directive.tpl.html',
      replace: false,
      controllerAs: 'auth',
      controller: function controller(Pharzone, $rootScope) {
        var vm = this;
        vm.login = Pharzone.api.login;
        vm.register = Pharzone.api.register;
        vm.unauth = Pharzone.api.unauth;
        vm.deleteUser = Pharzone.api.deleteUser;
        vm.user = Pharzone.data.users.$$state;
        vm.updateUser = Pharzone.api.updateUser;
      },
      link: function link(scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
})();
//# sourceMappingURL=../../../pharzone-common/components/auth/auth-directive.js.map