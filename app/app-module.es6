(() => {
  'use strict';

  /* @ngdoc object
   * @name pharzone
   * @description
   *
   */
  angular
    .module('pharzone', [
      'firebase',
      'ui.router',
      'mm.foundation',
      'pharzoneHome',
      'pharzoneCart',
      'pharzoneShop',
      'pharzoneDashboard'
    ]);
}());
