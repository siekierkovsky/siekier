angular.module('Eggly', ['firebase',
  'ngAnimate',
  'ui.router',
  'categories',
  'bookmarks'
]).constant('FIREBASE_URI', 'https://siekiera.firebaseio.com/')
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