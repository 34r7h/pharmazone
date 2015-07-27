(() => {
  'use strict';

  class Pharzone {
    constructor($log) {
      this.test = 'ALL SYSTEMS OPERATIONAL';
      this.data = {
        products: [
          {
            name: 'Cocaine',
            url:'cocaine',
            price: 100,
            unit: 'g',
            description: 'party drug often too dilute to benefit users',
            image: 'http://blog.heart.org/wp-content/uploads/2014/02/cocaine3.jpg'
          },
          {
            name: 'DMT',
            url:'dmt',
            price: 130,
            unit: 'mg',
            description: 'spiritual drug often associated with enlightenment',
            image: 'http://masswallpapers.mobi/wp-content/uploads/dmt-crystals-photos-7.jpg'
          },
          {
            name: 'LSD',
            url:'lsd',
            price: 12,
            unit: 'paper',
            description: 'Known to unlock the unknown',
            image: 'http://assets.hightimes.com/styles/large/s3/LSD.jpg?itok=bhGTfWkj'
          },
          {
            name: 'Peyote',
            url: 'peyote',
            price: 40,
            unit: 'button',
            description: 'Aboriginal drug often used in ceremonies and rights-of-passage',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/43/ba/48/peyote.jpg'
          },
          {
            name: 'Psilocybe Cubensis',
            url:'psilocybe-cubensis',
            price: 100,
            unit: 'g',
            description: 'A species of psychedelic mushroom whose principal active compounds are psilocybin and psilocin',
            image: 'http://www.culturamix.com/wp-content/gallery/8-67/psilocybe-cubensis-2.jpg'
          }
        ],
        users:[
          {
            name:'irth orbits',
            email:'irth03@gmail.com',
            role:'lab',
            deals:{
              current:[
                {
                  drug: 'lsd',
                  form:'paper',
                  price: '100',
                  unit: 'ml',
                  qty: '1000'
                },
                {
                  drug: 'dmt',
                  form: 'crystals',
                  price: '40',
                  unit: 'mg',
                  qty: '500'
                }
              ],
              complete:[
                {
                  drug: 'meth',
                  form: 'crystals',
                  price: '4',
                  unit: 'g',
                  qty: '5000'
                }
              ]
            }
          },
          {
	          name:'jah farmer',
	          email:'jaffey@gmail.com',
	          role: 'pharmacist',
	          lab:'undermarket',
	          deals:{
		          current:[
			          {
				          drug: 'hemmehroid cream',
				          form:'cream',
				          price: '20',
				          unit: '100g',
				          qty: '100'
			          },
			          {
				          drug: 'backsporin',
				          form: 'salve',
				          price: '55',
				          unit: '50 mg',
				          qty: '540'
			          }
		          ],
		          complete:[
			          {
				          drug: 'sales',
				          form: 'peer-pressure',
				          price: '80',
				          unit: 'interaction',
				          qty: '40000'
			          }
		          ]
	          }
          }
        ]
      };
	    this.api = {
		    addToCart: (product) => {
		      $log.info('adding to cart', product);
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
