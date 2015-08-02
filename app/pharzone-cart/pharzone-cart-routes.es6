(() => {
  'use strict';

  angular
    .module('pharzoneCart')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('pharzone.cart', {
        url: '/cart',
        template: '<edit-cart></edit-cart><ui-view></ui-view>',
        resolve:{
          orders: (Pharzone)=>{
            return Pharzone.data.db.orders;
          }
        },
        controllerAs: 'cartCtrl',
        controller: ($scope, orders)=>{
          let vm = this;
          $scope.orders = orders;
        }
      })
      .state('pharzone.cart.payment', {
        url: '/:order',
        template: '<payment></payment>'
      });
  }
}());
