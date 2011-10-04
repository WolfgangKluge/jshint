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
        // function
        .addError(2, "Expected whitespace '\xB7' between 'function' and 'hello', but '\xB7\xB7' found.")
        .addError(2, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7\xB7' found.")
        .addError(3, "Expected whitespace '\xB7' between 'return' and '+', but '\xB7\xB7\xB7' found.")
        .addError(3, "Unexpected whitespace '\xB7\xB7' between '+' and '2'.")
        .addError(5, "Expected whitespace '\xB7' between 'function' and '(', but '\xB7\xB7' found.")
        .addError(5, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7\xB7' found.")
        // try
        .addError(7, "Expected whitespace '\xB7' between 'try' and '{', but '\xB7\xB7' found.")
        .addError(8, "Expected whitespace '\xB7' between '}' and 'catch', but '\xB7\xB7' found.")
        .addError(8, "Expected whitespace '\xB7' between 'catch' and '(', but '\xB7\xB7\xB7' found.")
        .addError(8, "Unexpected whitespace '\xB7\xB7\xB7\xB7' between '(' and 'ex'.")
        .addError(8, "Unexpected whitespace '\xB7\xB7\xB7\xB7\xB7' between 'ex' and ')'.")
        .addError(8, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7\xB7\xB7\xB7...' found.")
        .addError(11, "Expected whitespace '\xB7' between '}' and 'catch', but '' found.")
        // throw
        .addError(14, "Expected whitespace '\xB7' between 'throw' and 'test', but '\xB7\xB7\xB7' found.")
        // while
        .addError(17, "Expected whitespace '\xB7' between 'while' and '(', but '\xB7\xB7' found.")
        .addError(17, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7\xB7' found.")
        // do
        .addError(20, "Expected whitespace '\xB7' between 'do' and '{', but '\xB7\xB7' found.")
        .addError(21, "Expected whitespace '\xB7' between '}' and 'while', but '\xB7\xB7' found.")
        .addError(21, "Expected whitespace '\xB7' between 'while' and '(', but '\xB7\xB7\xB7' found.")
        .addError(23, "Expected whitespace '\xB7' between '}' and 'while', but '' found.")
        // for
        .addError(25, "Expected whitespace '\xB7' between 'for' and '(', but '\xB7\xB7' found.")
        .addError(25, "Unexpected whitespace '\xB7\xB7' between 'i' and ';'.")
        .addError(25, "Expected whitespace '\xB7' between ';' and 'i', but '\xB7\xB7\xB7' found.")
        .addError(25, "Expected whitespace '\xB7' between 'i' and '<', but '\xB7\xB7' found.")
        .addError(25, "Expected whitespace '\xB7' between '<' and '3', but '\xB7\xB7\xB7' found.")
        .addError(25, "Unexpected whitespace '\xB7\xB7' between '3' and ';'.")
        .addError(25, "Expected whitespace '\xB7' between ';' and 'i', but '\xB7\xB7\xB7\xB7' found.")
        .addError(25, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7\xB7' found.")
        .addError(26, "Expected whitespace '\xB7' between ';' and 'i', but '' found.")
        .addError(27, "Unexpected whitespace '\xB7\xB7' between ';' and ';'.")
        // var
        .addError(25, "Expected whitespace '\xB7' between 'var' and 'i', but '\xB7\xB7\xB7' found.")
        .addError(30, "Expected whitespace '\xB7' between 'var' and 'a', but '\xB7\xB7' found.")
        .addError(30, "Expected whitespace '\xB7' between 'a' and '=', but '\xB7\xB7\xB7' found.")
        .addError(30, "Expected whitespace '\xB7' between '=' and '2', but '\xB7\xB7\xB7\xB7' found.")
        .addError(31, "Expected whitespace '\xB7' between 'c' and '=', but '\xB7\xB7\xB7' found.")
        .addError(31, "Expected whitespace '\xB7' between '=' and '3', but '\xB7\xB7' found.")
        // bitwise assign
        .addError(33, "Expected whitespace '\xB7' between 'a' and '|=', but '\xB7\xB7' found.")
        .addError(33, "Expected whitespace '\xB7' between '|=' and '3', but '\xB7\xB7' found.")
        // colons in object literals
        .addError(36, "Unexpected whitespace '\xB7' between 'a' and ':'.")
        .addError(37, "Unexpected whitespace '\xB7\xB7' between 'b' and ':'.")
        .addError(37, "Expected whitespace '\xB7' between ':' and '3', but '\xB7\xB7\xB7' found.")
        .test(src, {checkformat: true})
    ;
};
