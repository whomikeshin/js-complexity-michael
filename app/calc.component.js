'use strict';

angular.module('myApp').
component('calc', {
  templateUrl: 'calc.template.html',
  controller: function CalcController() {
    this.keywords = [
      {
        name: 'if',
        value: '1'
      }, {
        name: 'else if',
        value: '2'
      }, {
        name: 'while',
        value: '1'
      }
    ];
  }
});



//  function ($scope, jsComplexity) {
//
//   $scope.reset = function() {
//     return [];
//   };
//
//   $scope.checkMatches = function() {
//     return jsComplexity.list();
//   };
//
//   $scope.countMatches = function() {
//     var matches = $scope.checkMatches(),
//         matchCounts = {};
//
//     matches.forEach(function(el) {
//       if (matchCounts[el]) {
//         matchCounts[el] += 1;
//       } else {
//         matchCounts[el] = 1;
//       }
//     });
//     $scope.countResult = matchCounts;
//     return $scope.countResult;
//   };
//
//   $scope.keyWords = function() {
//     var printValues = [
//       { name: "default",
//         value: "+1"
//     }];
//
//     var result = $scope.countResult;
//     if (result) {
//       result.keys.forEach(function(key) {
//         var kv = {
//           name: key,
//           value: "+" + result[key]
//         };
//         printValues.push(kv);
//       });
//     }
//     return printValues;
//   };
//
//   $scope.reset();
// }]);
