'use strict';

/**
 * @ngdoc overview
 * @name autoCompletionApp
 * @The app only have one state which is the 'Main' who has set MainCtrl 
 * and don't need injection in other place
 * # autoCompletionApp
 *
 * Main module of the application.
 */
angular
  .module('autoCompletionApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      //Redirect everything to the root
      .otherwise({
        redirectTo: '/'
      });
  });
