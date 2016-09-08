angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('gyaneo2.gyaneo', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gyaneo.html',
        controller: 'gyaneoCtrl'
      }
    }
  })

  .state('gyaneo2.cart', {
    url: '/cart',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  .state('gyaneo2', {
    url: '/menu',
    templateUrl: 'templates/gyaneo2.html',
    abstract:true
  })

  .state('gyaneo2.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('gyaneo2.signup', {
    url: '/signup',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('checkout', {
    url: '/checkout',
    templateUrl: 'templates/checkout.html',
    controller: 'checkoutCtrl'
  })

$urlRouterProvider.otherwise('/menu/home')

  

});