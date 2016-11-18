'use strict';

angular.module('myApp')
.service('jsComplexity', function() {

  function matchIfs(jsCode) {
    return jsCode.match(/(if(?!'|"))|(else if(?!'|"))/gi);
  }

  function matchCases(jsCode) {
    return jsCode.match(/(case(?!'|"))/gi);
  }

  function matchLoops(jsCode) {
    return jsCode.match(/(while(?!'|"))|(for(?!'|"))/gi);
  }

  function matchTernaries(jsCode) {
    return jsCode.match(/([?](?=(.*[:])))/g);
  }

  function matchOrs(jsCode) {
    return jsCode.match(/([|](?!'|"))/g);
  }

  this.evaluate = function(jsCode) {
    var ifCount = matchIfs(jsCode) ? matchIfs(jsCode).length : 0,
        caseCount = matchCases(jsCode) ? matchCases(jsCode).length : 0,
        loopCount = matchLoops(jsCode) ? matchLoops(jsCode).length : 0,
        ternaryCount = matchTernaries(jsCode) ? matchTernaries(jsCode).length : 0,
        orCount = matchOrs(jsCode) ? Math.floor(matchOrs(jsCode).length / 2) : 0;

    // complexity equals 1 if source code has no control flow statements
    return 1 + ifCount + caseCount + loopCount + ternaryCount + orCount;
  };

  this.list = function(jsCode) {
    var matchList = [],
        ifs = matchIfs(jsCode) ? matchIfs(jsCode) : [],
        cases = matchCases(jsCode) ? matchCases(jsCode) : [],
        loops = matchLoops(jsCode) ? matchLoops(jsCode) : [],
        ternaries = matchTernaries(jsCode) ? matchTernaries(jsCode) : [],
        // watch out here
        ors = matchOrs(jsCode) ? matchOrs(jsCode) : [];
    return matchList.concat(ifs, cases, loops, ternaries, ors);
  };
});
