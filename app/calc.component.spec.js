'use strict';

describe('myApp module', function() {

  beforeEach(module('myApp'));

  describe('mainViewCtrl Controller', function(){

    it('should exist', inject(function($controller) {
      //spec body
      var scope = {};
      var mainViewCtrl = $controller('mainViewCtrl', {$scope: scope});
      expect(mainViewCtrl).toBeDefined();
      expect(scope.reset).toBeDefined();
      expect(scope.checkJSCode).toBeDefined();
      expect(scope.sampleFn).toBeUndefined();
    }));
  });
});
