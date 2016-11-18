'use strict';

describe('myApp.jsComplexity Service', function() {

  beforeEach(module('myApp'));

  describe('jsComplexity Service', function(){

    it('should exist', inject(function(jsComplexity) {
      expect(jsComplexity).toBeDefined();
      expect(jsComplexity.evaluate).toBeDefined();
    }));

    // If statements
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

    // Case statements

    it('should evaluate a single case correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ switch(a){case 0:return a;}}')).toEqual(2);
    }));

    it('should evaluate cases and a default correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ switch(a){case 0:return a;case 1:return a;default:return -1;}}')).toEqual(3);
    }));

    it('should ignore case conditions in strings', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ switch(a){ case 1:return "case";}}')).toEqual(2);
    }));

    it('should evaluate an if with nested case correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ if(a%2===0){switch(a){case 0:return a;default:return "even";}}else{return "odd";}}')).toEqual(3);
    }));

    // Loop statements

    it('should evaluate a while loop correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ while(a>0){console.log(a);a--;}}')).toEqual(2);
    }));

    it('should evaluate a for loop correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ for(vari=0;i<a;i++){console.log(a);}}')).toEqual(2);
    }));

    it('should evaluate a while loop with nested if, else if, else correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ while(a>0){if(a<2){a-=1;}else if(a<10){a/=2;}else{a/=5;}}}')).toEqual(4);
    }));

    // Tenary Operator
    it('should evaluate a ternary operator correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ return a%2===0?"even":"odd";}')).toEqual(2);
    }));

    it('should ignore ternary operator in strings', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ return a%2===0?"even":"?";}')).toEqual(2);
    }));

    // OR Operator
    it('should ignore ternary operator in strings', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ return a || "empty";}')).toEqual(2);
    }));

    it('should ignore ternary operator in strings', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ return a || "||";}')).toEqual(2);
    }));

  });
});
