'use strict';

angular.module('myApp')
.controller('mainViewCtrl', ['$scope', 'jsComplexity',
 function ($scope, jsComplexity) {

  $scope.reset = function() {
    $scope.jsCode = [ "// Expected Complexity: 3\n",
                      "function a(x) {\n",
                      "    if (true) {\n",
                      "        return 'if'; // 1st path\n",
                      "    } else if (false) {\n",
                      "        return x+1; // 2nd path\n",
                      "    } else {\n",
                      "        return 4; // 3rd path\n",
                      "    }\n",
                      "}"].join('');
    $scope.checkJSCode($scope.jsCode);
  };

  $scope.checkJSCode = function (code) {
    $scope.checkResult = jsComplexity.evaluate(code);
  };

  $scope.checkCalc = function (code) {
    var hash = countMatches(jsComplexity.list(code));
    var results = hashToArray(hash);
    $scope.calcResults = results;
  };

  function countMatches(list) {
    var seen = {};
    list.forEach(function(el) {
      if (seen[el]) {
        seen[el] += 1;
      } else {
        seen[el] = 1;
      }
    });
    return seen;
  }

  function hashToArray(hash) {
    var arr = [];
    Object.keys(hash).forEach(function(key) {
      arr.push({
        name: key,
        value: hash[key]
      });
    });
    arr.push({name: "plus 1", value:1})
    return arr;
  }

  $scope.reset();
}]);
