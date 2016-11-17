'use strict';

angular.module('myApp')
.service('jsComplexity', function() {
  var keywords = [
    'if', 'else if', 'else'
  ];
  // custom parser

  function countIfs(jsCode) {
    var matches = jsCode.match(/(if(?!'|"))|(else if(?!'|"))|(else(?!'|"))/gi);
    // match only if not followed by ' or "

    if (matches) {
      return matches.length;
    }
    return 0;
  }

  function countCases(jsCode) {
    var matches = jsCode.match(/(case(?!'|"))|(default(?!'|"))/gi);

    if (matches) {
      return matches.length;
    }
    return 0;
  }

  this.evaluate = function(jsCode) {
    var ifCount = countIfs(jsCode),
        caseCount = countCases(jsCode);

    return ifCount + caseCount;
  };
});
