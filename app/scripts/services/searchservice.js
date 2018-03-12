'use strict';

/**
 * @ngdoc service
 * @name autoCompletionApp.searchService
 * @API Google search
 * # searchService
 * Service in the autoCompletionApp.
 */
angular.module('autoCompletionApp')
  .factory('searchService', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    //Api Path
   	var ctxPath = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDUVURVSMeQ_W8h_4faw4wc9KYRk-kGg94&cx=014091130388198269151:a_hdpi_uthq&q=';

    //Searching word by word
    function searchYoutube(word) {
		var defer = $q.defer();

	    $http({
	    	method:'GET',
            url: ctxPath + word,
            headers: {'Content-Type': 'application/json'}
	    }).then(function(response) {
	    	defer.resolve(response.data);
	    });

	    return defer.promise;
	}


	// expose a public API
	return {
		searchYoutube: searchYoutube
	};


  });