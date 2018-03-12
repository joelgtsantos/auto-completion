'use strict';

/**
 * @ngdoc overview
 * @name autoCompletionApp
 * @description
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
      .otherwise({
        redirectTo: '/'
      });
  });
