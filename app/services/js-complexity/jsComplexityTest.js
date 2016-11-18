'use strict';

describe('myApp.jsComplexity Service', function() {

  beforeEach(module('myApp'));

  describe('jsComplexity Service', function(){

    it('should exist', inject(function(jsComplexity) {
      expect(jsComplexity).toBeDefined();
      expect(jsComplexity.evaluate).toBeDefined();
    }));

    it('should evaluate function without control flow statements correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){return a;}')).toEqual(1);
    }));

    it('should evaluate a single if correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ if(a){return a;}}')).toEqual(2);
    }));

    it('should evaluate an if, else correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ if(a){return a;}else{return 0;}}')).toEqual(2);
    }));

    it('should evaluate an if, else if, else correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ if(a===1){return a;}else if(a===0){return 2;}else{return 0;}}')).toEqual(3);
    }));

    it('should evaluate an if, else if (2), else correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ if(a===1){return a;}else if(a===-1){return 1;}else if(a===0){return 2;}else{return 0;}}')).toEqual(4);
    }));

    it('should ignore conditions in strings', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ if(a===1){return "if";}else{return "else";}}')).toEqual(2);
    }));

    /// Switch

    it('should evaluate a switch statement with a single case correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ switch(a){case 0:return a;}}')).toEqual(2);
    }));

    it('should evaluate a switch statement with cases and default correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ switch(a){case 0:return a;case 1:return a;default:return -1;}}')).toEqual(3);
    }));

    it('should ignore switch conditions in strings', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('switch(a){ case 1:return "case";default:return "default";}')).toEqual(2);
    }));

    // it('should evaluate a nested if and switch, correctly', inject(function(jsComplexity) {
    //   expect(jsComplexity.evaluate('check(a){ if(a%2===0){switch(a){case 0:return a;break;default:return "even";}}else{return "odd"}}')).toEqual(3);
    // }));
  });
});
