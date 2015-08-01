(() => {
  'use strict';

  class Pharzone {
    constructor($log, $state, $firebaseObject, $rootScope) {
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
      let vm = this;
      this.test = 'ALL SYSTEMS OPERATIONAL';
      this.cart = {};
      this.index = {products:{},users:{},orders:{}};
      this.data = {
	      db: ()=>{
		      let ref = new Firebase('https://pharzone.firebaseio.com/');
		      var dbObj = $firebaseObject(ref).$loaded().then((data)=>{
			      $log.debug('dbObj', data);
			      return data;
		      });
		      return dbObj;
	      },
        products: (()=>{
          let ref = new Firebase('https://pharzone.firebaseio.com/products');
          var dbObj = $firebaseObject(ref).$loaded().then((data)=>{
            $log.debug('Looping through products to index', data);
            angular.forEach(data, (product, key) =>{
              $log.debug('Looping through products to index');
              this.index['products'][product.url] = key;
            });
            $log.debug('this.index',this.index);
            $log.debug('productsObj', data);
            return data;
          });
          return dbObj;
        })(),
        users:  (()=>{
          let ref = new Firebase('https://pharzone.firebaseio.com/users');
          var dbObj = $firebaseObject(ref).$loaded().then((data)=>{
            $log.debug('userObj', data);
            return data;
          });
          return dbObj;
        })(),
        orders:  ()=>{
          let ref = new Firebase('https://pharzone.firebaseio.com/orders');
          var dbObj = $firebaseObject(ref).$loaded().then((data)=>{
            $log.debug('ordersObj', data);
            return data;
          });
          return dbObj;
        }
      };

	    this.api = {
        promise: (target, data)=> {
          $log.debug("promising data");
          $log.debug(target , data);
          setTimeout(()=> {
            if (data) {
              $rootScope.$apply( ()=> {
                target.data = data;
              });
              return target;
            } else {
              this.api.promise(target, data);
              $log.debug('looking for data..');
            }
          }, 500);
        },
        make: (type, object)=>{
          if(!this.data[type].object){
            this.data[type].push(object);
            this.data[type].$save();
          }
        },
        getTime: () => {
          return Date.now();
        },
		    addToCart: (product, cart, qty) => {
          if(!qty) qty = 1;
		      $log.info('Adding', qty +' '+ product);
          product['qty']= qty;
          if(cart[product.name]){
            console.log('Already in cart.');
          } else {
            cart[product.name]=product;
            $log.info('To cart', cart);
            return cart;
          }

	      },
        cartTotal: (items) => {
          // $log.debug('calculating totals', items);
          var total = 0;
          angular.forEach(items, (item)=>{
            var itemTotal = item.price * item.qty;
            total = total + itemTotal;
          });
          return total;
        },
        checkout: (order, orderTotal, time, vm) => {
          // var timestamp = Date.now();
          order.total = orderTotal;
//        this.data.orders[time]=order;

        $log.debug('getDb() - checkout');
        if(this.data.orders){
          this.data.orders.$$state.value[time]=order;
          this.data.orders.$$state.value.$save();
          $log.debug('this.data.orders.$$state.value',this.data.orders);
        }
        // TODO wire to db
        $log.debug(this.data.orders, 'orderTotal @ ' + time);
        $log.debug($state, 'State stuff');
        var href = $state.href("pharzone.cart.payment", { order: time });
        $state.go('pharzone.cart.payment',{order:time});
        $log.debug($state, 'State stuff');

        }
	    }
    }

    get() {
      return 'Pharzone';
    }
  }

  /**
   * @ngdoc service
   * @name pharzone.service:Pharzone
   *
   * @description
   *
   */
  angular
    .module('pharzone')
    .service('Pharzone', Pharzone);
}());
