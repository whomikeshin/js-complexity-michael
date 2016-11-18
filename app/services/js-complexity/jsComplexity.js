'use strict';

angular.module('myApp')
.service('jsComplexity', function() {
  var keywords = [
    'if', 'else if', 'else'
  ];
  // custom parser

  function countIfs(jsCode) {
    // match only if not followed by ' or "
    // delete else regex
    var matches = jsCode.match(/(if(?!'|"))|(else if(?!'|"))/gi);

    if (matches) {
      return matches.length;
    }
    return 0;
  }

  function countCases(jsCode) {
    // delete default regex
    var matches = jsCode.match(/(case(?!'|"))/gi);

    if (matches) {
      return matches.length;
    }
    return 0;
  }

  function countLoops(jsCode) {
    var matches = jsCode.match(/(while(?!'|"))|(for(?!'|"))/gi);

    if (matches) {
      return matches.length;
    }

    return 0;
  }

  this.evaluate = function(jsCode) {
    var ifCount = countIfs(jsCode),
        caseCount = countCases(jsCode),
        loopCount = countLoops(jsCode);

    return ifCount + caseCount + loopCount + 1;
    // complexity equals 1 if source code has no control flow statements
  };
});
