'use strict';

(function () {
  'use strict';

  angular.module('pharzoneDashboard').config(config);

  function config($stateProvider) {
    $stateProvider.state('pharzone.dashboard', {
      url: '/dashboard',
      template: '<ui-view></ui-view>'
    }).state('pharzone.dashboard.edit', {
      url: '/products',
      template: '<edit-products></edit-products>'
    }).state('pharzone.dashboard.account', {
      url: '/user/:user',
      template: '<account></account>'
    });
  }
})();
//# sourceMappingURL=../pharzone-dashboard/pharzone-dashboard-routes.js.map