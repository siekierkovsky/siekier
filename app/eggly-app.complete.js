angular.module('Eggly', ['firebase',
  'ngAnimate',
  'ui.router',
  'categories',
  'bookmarks'
]).constant('FIREBASE_URI','siekiera.firebaseio.com')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('eggly', {
        url: '',
        abstract: true
      })
    ;
    $urlRouterProvider.otherwise('/');
  })

;