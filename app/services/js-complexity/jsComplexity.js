'use strict';

angular.module('myApp')
.service('jsComplexity', function() {

  function countIfs(jsCode) {
    var matches = jsCode.match(/(if(?!'|"))|(else if(?!'|"))/gi);

    return matches ? matches.length : 0;
  }

  function countCases(jsCode) {
    var matches = jsCode.match(/(case(?!'|"))/gi);

    return matches ? matches.length : 0;
  }

  function countLoops(jsCode) {
    var matches = jsCode.match(/(while(?!'|"))|(for(?!'|"))/gi);

    return matches ? matches.length : 0;
  }

  function countTernary(jsCode) {
    var matches = jsCode.match(/([?](?=(.*[:])))/g);

    return matches ? matches.length : 0;
  }

  function countOrs(jsCode) {
    var matches = jsCode.match(/([|](?!'|"))/g);

    return matches ? Math.floor(matches.length / 2) : 0;
  }

  this.evaluate = function(jsCode) {
    var ifCount = countIfs(jsCode),
        caseCount = countCases(jsCode),
        loopCount = countLoops(jsCode),
        ternaryCount = countTernary(jsCode),
        orCount = countOrs(jsCode);

    // complexity equals 1 if source code has no control flow statements
    return 1 + ifCount + caseCount + loopCount + ternaryCount + orCount;
  };
});
