(() => {
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
  angular
    .module('pharzoneDashboard')
    .directive('editProducts', editProducts);

  function editProducts($log, $rootScope) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'pharzone-dashboard/components/edit-products-directive.tpl.html',
      replace: false,
      controllerAs: 'editProducts',
      controller(PharzoneDashboard, $scope) {
        let vm = this;
        let db = PharzoneDashboard.db;
        vm.name = 'editProducts';
        vm.newDeal = PharzoneDashboard.newDeal;
        vm.save = PharzoneDashboard.save;
        var getDb = ()=> {
          setTimeout(()=> {
            if (db.$$state.value) {
              $scope.$apply( ()=> {
                vm.products = db.$$state.value.users[$rootScope.user].products;
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
