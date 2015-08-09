(() => {
  'use strict';

  class PharzoneCommonCtrl {
    constructor() {
      let vm = this;
      vm.ctrlName = 'PharzoneCommonCtrl';
    }
  }

  /**
   * @ngdoc object
   * @name pharzoneCommon.controller:PharzoneCommonCtrl
   *
   * @description
   *
   */
  angular
    .module('pharzoneCommon')
    .controller('PharzoneCommonCtrl', PharzoneCommonCtrl);
}());
