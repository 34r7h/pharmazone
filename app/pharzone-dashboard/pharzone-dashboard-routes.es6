(() => {
  'use strict';

  angular
    .module('pharzoneDashboard')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('pharzone.dashboard', {
        url: '/dashboard',
        template:'<ui-view></ui-view>'
      })
      .state('pharzone.dashboard.edit', {
        url: '/edit',
        template: '<edit-products></edit-products><ui-view></ui-view>'
      })
      .state('pharzone.dashboard.edit.product', {
        url: '/:product',
        template: '<edit-products></edit-products>'
      })
      .state('pharzone.dashboard.account', {
        url: '/:user',
        template: '<account></account>'
      });
  }
}());
