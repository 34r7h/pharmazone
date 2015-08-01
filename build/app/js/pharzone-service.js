'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var Pharzone = (function () {
    function Pharzone($log, $state, $firebaseObject, $rootScope) {
      var _this = this;

      _classCallCheck(this, Pharzone);

      /*
            this.promise = (target, data)=> {
              $log.debug('Promising data..', target +': '+data);
              setTimeout(()=> {
                if (data) {
                  $rootScope.$apply( ()=> {
                    target.data = data;
                  });
                  return target;
                } else {
                  this.promise($rootScope, data);
                  $log.debug('looking for data..');
                }
              }, 500);
            };
      */
      var vm = this;
      this.test = 'ALL SYSTEMS OPERATIONAL';
      this.cart = {};
      this.index = { products: {}, users: {}, orders: {} };
      this.data = {
        db: (function () {
          var ref = new Firebase('https://pharzone.firebaseio.com/');
          var dbObj = $firebaseObject(ref).$loaded().then(function (data) {
            $log.debug('dbObj', data);
            return data;
          });
          return dbObj;
        })(),
        products: (function () {
          var ref = new Firebase('https://pharzone.firebaseio.com/products');
          var dbObj = $firebaseObject(ref).$loaded().then(function (data) {
            $log.debug('Looping through products to index', data);
            angular.forEach(data, function (product, key) {
              $log.debug('Looping through products to index');
              _this.index['products'][product.url] = key;
            });
            $log.debug('this.index', _this.index);
            $log.debug('productsObj', data);
            return data;
          });
          return dbObj;
        })(),
        users: (function () {
          var ref = new Firebase('https://pharzone.firebaseio.com/users');
          var dbObj = $firebaseObject(ref).$loaded().then(function (data) {
            $log.debug('userObj', data);
            return data;
          });
          return dbObj;
        })(),
        orders: (function () {
          var ref = new Firebase('https://pharzone.firebaseio.com/orders');
          var dbObj = $firebaseObject(ref).$loaded().then(function (data) {
            $log.debug('ordersObj', data);
            return data;
          });
          return dbObj;
        })()
      };
      this.db = {};
      angular.forEach(this.data, function (method, key) {
        $log.log(method, key);
        _this.db[key] = method;
      });
      $log.log('this.db', this.db);

      this.api = {
        promise: function promise(target, data) {
          $log.debug("promising data");
          $log.debug(target, data);
          setTimeout(function () {
            if (data) {
              $rootScope.$apply(function () {
                target.data = data;
              });
              return target;
            } else {
              _this.api.promise(target, data);
              $log.debug('looking for data..');
            }
          }, 500);
        },
        make: function make(type, object) {
          if (!_this.data[type].object) {
            _this.data[type].push(object);
            _this.data[type].$save();
          }
        },
        getTime: function getTime() {
          return Date.now();
        },
        addToCart: function addToCart(product, cart, qty) {
          if (!qty) qty = 1;
          $log.info('Adding', qty + ' ' + product);
          product['qty'] = qty;
          if (cart[product.name]) {
            console.log('Already in cart.');
          } else {
            cart[product.name] = product;
            $log.info('To cart', cart);
            return cart;
          }
        },
        cartTotal: function cartTotal(items) {
          // $log.debug('calculating totals', items);
          var total = 0;
          angular.forEach(items, function (item) {
            var itemTotal = item.price * item.qty;
            total = total + itemTotal;
          });
          return total;
        },
        checkout: function checkout(order, orderTotal, time, vm) {
          // var timestamp = Date.now();
          order.total = orderTotal;
          //        this.data.orders[time]=order;

          $log.debug('getDb() - checkout');
          if (_this.data.orders) {
            _this.data.orders.$$state.value[time] = order;
            _this.data.orders.$$state.value.$save();
            $log.debug('this.data.orders.$$state.value', _this.data.orders);
          }
          // TODO wire to db
          $log.debug(_this.data.orders, 'orderTotal @ ' + time);
          $log.debug($state, 'State stuff');
          var href = $state.href("pharzone.cart.payment", { order: time });
          $state.go('pharzone.cart.payment', { order: time });
          $log.debug($state, 'State stuff');
        }
      };
    }

    /**
     * @ngdoc service
     * @name pharzone.service:Pharzone
     *
     * @description
     *
     */

    _createClass(Pharzone, [{
      key: 'get',
      value: function get() {
        return 'Pharzone';
      }
    }]);

    return Pharzone;
  })();

  angular.module('pharzone').service('Pharzone', Pharzone);
})();
//# sourceMappingURL=pharzone-service.js.map