// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-14
description: >
    Object.create - argument 'Properties' is an Error object (15.2.3.7
    step 2)
includes: [runTestCase.js]
---*/

function testcase() {

        var props = new Error("test");
        var result = false;

        (Object.getOwnPropertyNames(props)).forEach(function(name){
            props[name] = {value:11, configurable:true}
        });

        Object.defineProperty(props, "prop15_2_3_5_4_14", {
            get: function () {
                result = this instanceof Error;
                return {};
            },
            enumerable: true
        });
        var newObj = Object.create({}, props);
        return result && newObj.hasOwnProperty("prop15_2_3_5_4_14");
    }
runTestCase(testcase);
