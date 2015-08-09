'use strict';

(function () {
  'use strict';

  angular.module('pharzoneCommon').config(config);

  function config($stateProvider) {
    $stateProvider.state('pharzoneCommon', {
      url: '/login',
      template: '<auth></auth>'
    });
  }
})();
//# sourceMappingURL=../pharzone-common/pharzone-common-routes.js.map