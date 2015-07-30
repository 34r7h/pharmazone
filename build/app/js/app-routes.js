'use strict';

(function () {
  'use strict';

  angular.module('pharzone').config(config);

  function config($urlRouterProvider, $stateProvider) {
    $stateProvider.state('pharzone', {
      url: '',
      template: '<ui-view></ui-view>',
      abstract: true
    });
    $urlRouterProvider.otherwise('/');
  }
})();
//# sourceMappingURL=app-routes.js.map