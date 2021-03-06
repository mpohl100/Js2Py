// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.3.4.5-16-1
description: Function.prototype.bind, [[Extensible]] of the bound fn is true
includes: [runTestCase.js]
---*/

function testcase() {
  function foo() { }
  var o = {};
  
  var bf = foo.bind(o);
  var ex = Object.isExtensible(bf);
  if (ex === true) {
    return true;
  }
 }
runTestCase(testcase);
