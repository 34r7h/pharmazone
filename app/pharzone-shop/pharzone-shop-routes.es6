(() => {
  'use strict';

  angular
    .module('pharzoneShop')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('pharzone.shop', {
        template: '<ui-view></ui-view>',
        abstract:true
      })
      .state('pharzone.shop.list', {
        url: '/shop',
        template: '<product-list></product-list>'
      })
      .state('pharzone.shop.product', {
        url: '/shop/:user/:product',
        template: '<product></product>'
      });
  }
}());
