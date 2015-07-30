'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var PharzoneHome = (function () {
    function PharzoneHome() {
      _classCallCheck(this, PharzoneHome);

      this.test = Pharzone.test;
    }

    /**
     * @ngdoc service
     * @name pharzoneHome.service:PharzoneHome
     *
     * @description
     *
     */

    _createClass(PharzoneHome, [{
      key: 'get',
      value: function get() {
        return 'PharzoneHome';
      }
    }]);

    return PharzoneHome;
  })();

  angular.module('pharzoneHome').service('PharzoneHome', PharzoneHome);
})();
//# sourceMappingURL=../pharzone-home/pharzone-home-service.js.map