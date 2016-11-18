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
    // case where "do this or else "
    var matches = jsCode.match(/(if(?!'|"))|(else if(?!'|"))/g);

    if (matches) {
      return matches.length;
    }
    return 0;
  }

  function countCases(jsCode) {
    // delete default regex
    var matches = jsCode.match(/(case(?!'|"))/g);

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

  function countTernary(jsCode) {
    // how to match ?
    var matches = jsCode.match(/([?](?=(.*[:])))/g);

    if (matches) {
      return matches.length;
    }

    return 0;
  }

  function countOrs(jsCode) {
    var matches = jsCode.match(/([|](?!'|"))/g);

    if (matches) {
      return Math.floor(matches.length / 2);
    }

    return 0;
  }

  this.evaluate = function(jsCode) {
    var ifCount = countIfs(jsCode),
        caseCount = countCases(jsCode),
        loopCount = countLoops(jsCode),
        ternaryCount = countTernary(jsCode),
        orCount = countOrs(jsCode);

    return ifCount + caseCount + loopCount + ternaryCount + orCount + 1;
    // complexity equals 1 if source code has no control flow statements
  };
});
