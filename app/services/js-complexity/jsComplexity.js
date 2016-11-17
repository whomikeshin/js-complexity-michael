'use strict';

angular.module('myApp')
.service('jsComplexity', function() {
  function countIfs(jsCode) {
    return jsCode.match(/(if(?!'|"))|(else if(?!'|"))|(else(?!'|"))/gi).length;
    // match only if not followed by ' or "
  }

  this.evaluate = function(jsCode) {
    return countIfs(jsCode);
  };
});
