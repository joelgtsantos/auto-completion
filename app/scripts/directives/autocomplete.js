'use strict';

/**
 * @ngdoc directive
 * @name autoCompletionApp.directive:autoComplete
 * @description
 * # autoComplete
 */
angular.module('autoCompletionApp')
  .directive('autocomplete', function ($parse) {
  	return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 40 || event.which === 38 || event.which === 13 || event.which === 27) {
              //scope.$eval(attrs.autocomplete, {a: event});
              var invoker = $parse(attrs.autocomplete);
              invoker(scope, {event: event});
              scope.$apply();
              event.preventDefault;
              event.stopPropagation();
            }
        });
    };
  });
