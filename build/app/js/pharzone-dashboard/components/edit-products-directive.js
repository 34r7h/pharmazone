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
        var vm = this;
        var db = PharzoneDashboard.db;
        vm.name = 'editProducts';
        vm.newDeal = PharzoneDashboard.newDeal;
        vm.save = PharzoneDashboard.save;
        var getDb = function getDb() {
          setTimeout(function () {
            if (db.$$state.value) {
              $scope.$apply(function () {
                vm.products = db.$$state.value.products;
                /*vm.products.push({name:'fasdf'});
                 db.$$state.value.$save();*/
              });
            } else {
                getDb();
              }
          }, 500);
        };
        getDb();
      },
      link: function link(scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
})();
//# sourceMappingURL=../../pharzone-dashboard/components/edit-products-directive.js.map