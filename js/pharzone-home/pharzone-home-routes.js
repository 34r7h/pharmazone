'use strict';

(function () {
  'use strict';

  angular.module('pharzoneHome').config(config);

  function config($stateProvider) {
    $stateProvider.state('pharzone.home', {
      url: '/',
      templateUrl: 'pharzone-home/pharzone-home.tpl.html'
    });
  }
})();
//# sourceMappingURL=../pharzone-home/pharzone-home-routes.js.map