'use strict';

describe('squashLadder module', function() {

  beforeEach(module('squashLadder'));

  describe('rankings controller', function(){
    var scope;
    var ctrl;

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        ctrl = $controller("rankingsController", {$scope:scope});    
    }));

    it('should be defined', function() {
      expect(ctrl).toBeDefined();
    });

    it('should return 2 dummy people', function() {
      expect(scope.players.length).toEqual(2);
    });
  });
});