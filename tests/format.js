/**
 * Tests for all formatting-options.
 */

/*jshint boss: true, laxbreak: true, node: true */

var fs      = require('fs'),
    TestRun = require("./testhelper").setup.testRun;

/**
 * Whitespace rules
 */
exports.format_whitespace = function () {
    var src = fs.readFileSync(__dirname + "/fixtures/format/whitespace.js", "utf8");

    TestRun().test(src, {checkformat: false});

    TestRun()
        .addError(2, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7' found.")
        .addError(3, "Expected whitespace '\xB7' between 'return' and '+', but '\xB7\xB7\xB7' found.")
        .addError(3, "Unexpected whitespace '\xB7\xB7' between '+' and '2'.")
        .addError(6, "Expected whitespace '\xB7' between 'try' and '{', but '\xB7\xB7' found.")
        .addError(7, "Expected whitespace '\xB7' between '}' and 'catch', but '\xB7\xB7' found.")
        .addError(7, "Expected whitespace '\xB7' between 'catch' and '(', but '\xB7\xB7\xB7' found.")
        .addError(7, "Unexpected whitespace '\xB7\xB7\xB7\xB7' between '(' and 'ex'.")
        .addError(7, "Unexpected whitespace '\xB7\xB7\xB7\xB7\xB7' between 'ex' and ')'.")
        .addError(7, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7\xB7\xB7\xB7...' found.")
        .addError(11, "Expected whitespace '\xB7' between '}' and 'catch', but '' found.")
        .test(src, {checkformat: true})
    ;
};
