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
    var hash = $scope.countMatches(jsComplexity.list(code));
    var results = $scope.hashToArray(hash);
    $scope.calcResults = results;
  };

  $scope.countMatches = function (matches) {
    var seen = {};
    matches.forEach(function(el) {
      if (seen[el]) {
        seen[el] += 1;
      } else {
        seen[el] = 1;
      }
    });
    return seen;
  };

  $scope.hashToArray = function (hash) {
    var arr = [];
    Object.keys(hash).forEach(function(key) {
      arr.push({
        name: key,
        value: hash[key]
      });
    });
    return arr;
  };

  $scope.reset();
}]);
