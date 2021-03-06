// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.1.1-12-s
description: >
    Strict Mode - Eval code is strict eval code with a Use Strict
    Directive in the middle of the block
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        eval("var public = 1; 'use strict'; var anotherVariableNotReserveWord = 2;");
        return public === 1 && anotherVariableNotReserveWord === 2;
    }
runTestCase(testcase);
