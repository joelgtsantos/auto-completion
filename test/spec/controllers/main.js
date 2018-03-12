'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('autoCompletionApp'));
    var d;
    var searchService;
    beforeEach(inject(function($q, _searchService_){ //Mock our factory and spy on methods
        d = $q.defer();
        searchService = _searchService_;
        spyOn(searchService, 'searchYoutube').and.returnValue(d.promise);
    })); 

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      searchService : searchService
      // place here mocked dependencies
    });
  }));

  it('Should set results according to word to search', function(){
      MainCtrl.search(); //calling the method without word
      expect(MainCtrl.results).toBe([]); //testing the property results
  });

  it('Should set results according to word to search', function(){
      MainCtrl.search(); //calling the method without word
      expect(MainCtrl.results).toBe([]); //testing the property results
  });

  describe('Asyn call', function() {
      it('should call searchYoutube on searchService', function() {
          expect(searchService.searchYoutube).toHaveBeenCalled();
          expect(searchService.searchYoutube.calls.count()).toBe(1);
      });

      it('should do something on error', function() {
          d.reject(); // Reject the promise to emulate error scenario.
          scope.$digest();
          // Check for state on error.
          expect(MainCtrl.results).toBe([]);
      });

  });
});
