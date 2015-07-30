'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var PharzoneDashboard = (function () {
    function PharzoneDashboard(Pharzone) {
      _classCallCheck(this, PharzoneDashboard);

      this.test = Pharzone.test;
    }

    /**
     * @ngdoc service
     * @name pharzoneDashboard.service:PharzoneDashboard
     *
     * @description
     *
     */

    _createClass(PharzoneDashboard, [{
      key: 'get',
      value: function get() {
        return 'PharzoneDashboard';
      }
    }]);

    return PharzoneDashboard;
  })();

  angular.module('pharzoneDashboard').service('PharzoneDashboard', PharzoneDashboard);
})();
//# sourceMappingURL=../pharzone-dashboard/pharzone-dashboard-service.js.map