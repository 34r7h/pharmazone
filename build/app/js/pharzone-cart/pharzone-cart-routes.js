'use strict';

(function () {
  'use strict';

  angular.module('pharzoneCart').config(config);

  function config($stateProvider) {
    $stateProvider.state('pharzone.cart', {
      url: '/cart',
      template: '<edit-cart></edit-cart><ui-view></ui-view>'
    }).state('pharzone.cart.payment', {
      url: '/:order',
      template: '<payment></payment>'
    });
  }
})();
//# sourceMappingURL=../pharzone-cart/pharzone-cart-routes.js.map