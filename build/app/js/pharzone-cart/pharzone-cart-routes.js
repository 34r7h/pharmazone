'use strict';

(function () {
  'use strict';

  angular.module('pharzoneCart').config(config);

  function config($stateProvider) {
    var _this = this;

    $stateProvider.state('pharzone.cart', {
      url: '/cart',
      template: '<edit-cart></edit-cart><ui-view></ui-view>',
      resolve: {
        orders: function orders(Pharzone) {
          return Pharzone.data.db.orders;
        }
      },
      controllerAs: 'cartCtrl',
      controller: function controller($scope, orders) {
        var vm = _this;
        $scope.orders = orders;
      }
    }).state('pharzone.cart.payment', {
      url: '/:order',
      template: '<payment></payment>'
    });
  }
})();
//# sourceMappingURL=../pharzone-cart/pharzone-cart-routes.js.map