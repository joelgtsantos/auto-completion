'use strict';

/**
 * @ngdoc function
 * @name autoCompletionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the autoCompletionApp
 */
angular.module('autoCompletionApp')
  .controller('MainCtrl', function ($scope, searchService, $timeout) {

    $scope.searchBox = "";
    $scope.results = [];
    $scope.delay = null;
    $scope.iSelected = -1;

	//Search function is called when a change in model '$scope.searchWord' is happend
	$scope.search = function(){

		//If the word to looking for is different of null or empty
		if($scope.searchWord != "" && $scope.searchWord !== null){

			//If the method that calls to search, is active then is stopped first
			if ($scope.delay) {
				$timeout.cancel($scope.delay);
			}

			//A new call search is created
			$scope.delay = $timeout(function() {
				$scope.searchCompleted($scope.searchWord);
			}, 300);
		}else{

			//If the method that calls to search, is active then is stopped first
			if ($scope.delay) {
				$timeout.cancel($scope.delay);
			}

			//Clean the results	
			$scope.results = [];
		}
	}

	/*
	*	@parameter word = string
	*	It recives a string as a parameter and calls a searchYoutube service
	*/
	$scope.searchCompleted = function(word){
		searchService.searchYoutube(word)
		.then(function(data) {
			$scope.showResults(data);
		});
	}

	/*
	*	@parameter data = array
	*	It recives a array with object with results and a new parameter is added 
	*   to change the color background when it move by the arrows
	*/
	$scope.showResults = function(data){
		$scope.iSelected = -1;
		$scope.results = data.items;
		for (var i = 0; i < $scope.results.length; i++){
			$scope.results[i].active = false;
		}
	}


	/*
	*	@parameter event = array
	*   It is call by a directive autoComplete when a key is pressed, the event
	*	parameter contains all information about the key that was pressed
	*/
	$scope.keyPress = function(event) {
		
		//Key down
		if(event.which === 40){
			if($scope.iSelected < $scope.results.length - 1){
				$scope.iSelected++;
				$scope.highlightResult($scope.iSelected);
				
			}
		}

		//Key up
		if(event.which === 38){
			if($scope.iSelected > 0){
				$scope.iSelected--;
				$scope.highlightResult($scope.iSelected);	
			}
		}
	}


	/*
	*	@parameter j = integer
	*   It changes the class active to false for all elements <li>
	*	expect by the element which needs to be active
	*/
	$scope.highlightResult = function(j){
		for(var i = 0; i < $scope.results.length; i++){
			if(i == j)
				$scope.results[i].active = true;
			else
				$scope.results[i].active = false;
		}	
	}

  });
