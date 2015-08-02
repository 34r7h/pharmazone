'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var PharzoneShop = (function () {
    function PharzoneShop(Pharzone, $log, PharzoneCart) {
      var _this = this;

      _classCallCheck(this, PharzoneShop);

      this.test = Pharzone.test;
      this.db = Pharzone.data.db;
      this.products = Pharzone.data.products;
      this.cart = PharzoneCart.cart;

      var getDb = (function () {
        setTimeout(function () {
          if (Pharzone.data.products) {
            var vm = _this;
            vm.productsIndex = Pharzone.index.products;
          } else {
            getDb();
          }
        }, 500);
      })();

      /*TODO keep on indexing all day */

      var usersIndex = {},
          deals = [],
          thisDeal = {};

      var getDb = (function () {
        setTimeout(function () {
          if (Pharzone.data.users) {
            var vm = _this;
            vm.usersIndex = Pharzone.index.users;
            angular.forEach(Pharzone.data.users, function (user) {
              usersIndex[user.name] = user;

              /*angular.forEach(user.deals.current, function(deal){
                thisDeal[deal.drug] = deal;
                deals.push(thisDeal);
              });*/
            });
            _this.usersIndex = usersIndex;
            _this.deals = deals;
          } else {
            getDb();
          }
        }, 500);
      })();

      this.cart = Pharzone.cart;
      this.addToCart = Pharzone.api.addToCart;
    }

    /**
     * @ngdoc service
     * @name pharzoneShop.service:PharzoneShop
     *
     * @description
     *
     */

    _createClass(PharzoneShop, [{
      key: 'get',
      value: function get() {
        return 'PharzoneShop';
      }
    }]);

    return PharzoneShop;
  })();

  angular.module('pharzoneShop').service('PharzoneShop', PharzoneShop);
})();
//# sourceMappingURL=../pharzone-shop/pharzone-shop-service.js.map