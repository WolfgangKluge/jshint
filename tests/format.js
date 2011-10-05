/**
 * Tests for all formatting-options.
 */

/*jshint boss: true, laxbreak: true, node: true */

var fs      = require('fs'),
    TestRun = require("./testhelper").setup.testRun;

/**
 * Whitespace rules
 * find errors that were not found by the "white"-option
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
        .addError(5, "Expected whitespace '\xB7' between ',' and 'b', but '\xB7\xB7\xB7' found.")
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
        // if
        .addError(41, "Expected whitespace '\xB7' between 'if' and '(', but '\xB7\xB7' found.")
        .addError(41, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7' found.")
        .addError(41, "Expected whitespace '\xB7' between '}' and 'else', but '\xB7\xB7' found.")
        .addError(41, "Expected whitespace '\xB7' between 'else' and 'if', but '\xB7\xB7' found.")
        // switch
        .addError(43, "Expected whitespace '\xB7' between 'switch' and '(', but '\xB7\xB7' found.")
        .addError(43, "Expected whitespace '\xB7' between ')' and '{', but '\xB7\xB7' found.")
        .addError(44, "Expected whitespace '\xB7' between 'case' and '1', but '\xB7\xB7\xB7' found.")
        .addError(44, "Unexpected whitespace '\xB7\xB7' between '1' and ':'.")
        .test(src, {checkformat: true})
    ;
};

/**
 * Whitespace rules
 * find the same errors as "white"-option
 */
exports.format_whitespace_equal = function () {
    var src = fs.readFileSync(__dirname + "/fixtures/format/whitespace_equal.js", "utf8");

    TestRun()
        .addError(2, "Unexpected space after '('.")
        .addError(2, "Unexpected space after '('.")
        .addError(2, "Missing space after ')'.")
        .addError(3, "Unexpected space after '2'.")
        .addError(5, "Missing space after 'x'.")
        .addError(5, "Missing space after '='.")
        .addError(5, "Missing space after 'function'.")
        .addError(5, "Unexpected space after '('.")
        .addError(5, "Unexpected space after 'a'.")
        .addError(5, "Unexpected space after 'b'.")
        .addError(5, "Missing space after ')'.")
        .addError(5, "Unexpected space after '}'.")
        .addError(7, "Missing space after 'try'.")
        .addError(8, "Unexpected space after 'test'.")
        .addError(8, "Unexpected space before 'toString'.")
        .addError(9, "Missing space after 'catch'.")
        .addError(9, "Missing space after ')'.")
        .addError(11, "Missing space after 'while'.")
        .addError(11, "Unexpected space after '('.")
        .addError(11, "Unexpected space after 'true'.")
        .addError(11, "Missing space after ')'.")
        .addError(14, "Missing space after 'do'.")
        .addError(15, "Missing space after 'while'.")
        .addError(15, "Unexpected space after '('.")
        .addError(15, "Unexpected space after 'true'.")
        .addError(17, "Missing space after 'for'.")
        .addError(17, "Unexpected space after '('.")
        .addError(17, "Missing space after 'i'.")
        .addError(17, "Missing space after '<'.")
        .addError(17, "Unexpected space after '++'.")
        .addError(17, "Missing space after ')'.")
        .addError(19, "Missing space after 'a'.")
        .addError(19, "Missing space after '='.")
        .addError(19, "Unexpected space after '2'.")
        .addError(19, "Missing space after ','.")
        .addError(19, "Missing space after ','.")
        .addError(19, "Missing space after 'b'.")
        .addError(19, "Missing space after '='.")
        .addError(19, "Unexpected space after '3'.")
        .addError(22, "Missing space after 'a'.")
        .addError(22, "Missing space after '|='.")
        .addError(22, "Missing space after 'a'.")
        .addError(22, "Missing space after '|='.")
        .addError(22, "Unexpected space after '3'.")
        .addError(24, "Missing space after 'to'.")
        .addError(24, "Missing space after '='.")
        .addError(25, "Expected 'a' to have an indentation at 5 instead at 6.")
        .addError(25, "Missing space after ':'.")
        .addError(30, "Missing space after 'if'.")
        .addError(30, "Unexpected space after '('.")
        .addError(30, "Missing space after '1'.")
        .addError(30, "Missing space after '==='.")
        .addError(30, "Unexpected space after '2'.")
        .addError(30, "Missing space after ')'.")
        .addError(30, "Missing space after '}'.")
        .addError(30, "Missing space after 'if'.")
        .addError(30, "Unexpected space after '('.")
        .addError(30, "Missing space after '2'.")
        .addError(30, "Missing space after '==='.")
        .addError(30, "Unexpected space after '3'.")
        .addError(30, "Missing space after ')'.")
        .addError(32, "Missing space after 'switch'.")
        .addError(32, "Unexpected space after '('.")
        .addError(32, "Unexpected space after 'a'.")
        .addError(32, "Missing space after ')'.")
        .addError(33, "Expected 'case' to have an indentation at 1 instead at 5.")
        .addError(34, "Expected 'break' to have an indentation at 5 instead at 9.")
        .addError(35, "Expected 'case' to have an indentation at 1 instead at 5.")
        .addError(36, "Expected 'break' to have an indentation at 5 instead at 9.")
        .addError(37, "Expected 'default' to have an indentation at 1 instead at 5.")
        .addError(38, "Expected 'break' to have an indentation at 5 instead at 9.")
        .test(src, {checkformat: false, white: true});

    TestRun()
        .addError(2, "Unexpected whitespace '\xB7' between '(' and ')'.")
        .addError(2, "Expected whitespace '\xB7' between ')' and '{', but '' found.")
        .addError(3, "Unexpected whitespace '\xB7' between '2' and ';'.")
        .addError(5, "Expected whitespace '\xB7' between 'x' and '=', but '' found.")
        .addError(5, "Expected whitespace '\xB7' between 'function' and '(', but '' found.")
        .addError(5, "Unexpected whitespace '\xB7' between '(' and 'a'.")
        .addError(5, "Unexpected whitespace '\xB7' between 'a' and ','.")
        .addError(5, "Unexpected whitespace '\xB7' between 'b' and ')'.")
        .addError(5, "Expected whitespace '\xB7' between ')' and '{', but '' found.")
        .addError(5, "Expected whitespace '\xB7' between '=' and 'function', but '' found.")
        .addError(5, "Unexpected whitespace '\xB7' between '}' and ';'.")
        .addError(7, "Expected whitespace '\xB7' between 'try' and '{', but '' found.")
        .addError(8, "Unexpected whitespace '\xB7' between 'test' and '.'.")
        .addError(8, "Unexpected whitespace '\xB7' between '.' and 'toString'.")
        .addError(9, "Expected whitespace '\xB7' between 'catch' and '(', but '' found.")
        .addError(9, "Expected whitespace '\xB7' between ')' and '{', but '' found.")
        .addError(11, "Expected whitespace '\xB7' between 'while' and '(', but '' found.")
        .addError(11, "Unexpected whitespace '\xB7' between '(' and 'true'.")
        .addError(11, "Unexpected whitespace '\xB7' between 'true' and ')'.")
        .addError(11, "Expected whitespace '\xB7' between ')' and '{', but '' found.")
        .addError(14, "Expected whitespace '\xB7' between 'do' and '{', but '' found.")
        .addError(15, "Expected whitespace '\xB7' between 'while' and '(', but '' found.")
        .addError(15, "Unexpected whitespace '\xB7' between '(' and 'true'.")
        .addError(15, "Unexpected whitespace '\xB7' between 'true' and ')'.")
        .addError(17, "Expected whitespace '\xB7' between 'for' and '(', but '' found.")
        .addError(17, "Unexpected whitespace '\xB7' between '(' and 'var'.")
        .addError(17, "Expected whitespace '\xB7' between 'i' and '<', but '' found.")
        .addError(17, "Expected whitespace '\xB7' between '<' and '3', but '' found.")
        .addError(17, "Unexpected whitespace '\xB7' between '++' and ')'.")
        .addError(17, "Expected whitespace '\xB7' between ')' and '{', but '' found.")
        .addError(19, "Expected whitespace '\xB7' between 'a' and '=', but '' found.")
        .addError(19, "Expected whitespace '\xB7' between '=' and '2', but '' found.")
        .addError(19, "Unexpected whitespace '\xB7' between '2' and ','.")
        .addError(19, "Expected whitespace '\xB7' between ',' and 'b', but '' found.")
        .addError(19, "Expected whitespace '\xB7' between 'b' and '=', but '' found.")
        .addError(19, "Expected whitespace '\xB7' between '=' and '3', but '' found.")
        .addError(19, "Unexpected whitespace '\xB7' between '3' and ','.")
        .addError(22, "Expected whitespace '\xB7' between 'a' and '|=', but '' found.")
        .addError(22, "Expected whitespace '\xB7' between '|=' and '3', but '' found.")
        .addError(22, "Unexpected whitespace '\xB7' between '3' and ';'.")
        .addError(24, "Expected whitespace '\xB7' between 'to' and '=', but '' found.")
        .addError(25, "Expected indentation level of 1 (col 5) but found 1 (col 6).")
        .addError(25, "Expected whitespace '\xB7' between ':' and '2', but '' found.")
        .addError(24, "Expected whitespace '\xB7' between '=' and '{', but '' found.")
        .addError(30, "Expected whitespace '\xB7' between 'if' and '(', but '' found.")
        .addError(30, "Unexpected whitespace '\xB7' between '(' and '1'.")
        .addError(30, "Expected whitespace '\xB7' between '1' and '===', but '' found.")
        .addError(30, "Expected whitespace '\xB7' between '===' and '2', but '' found.")
        .addError(30, "Unexpected whitespace '\xB7' between '2' and ')'.")
        .addError(30, "Expected whitespace '\xB7' between ')' and '{', but '' found.")
        .addError(30, "Expected whitespace '\xB7' between '}' and 'else', but '' found.")
        .addError(30, "Expected whitespace '\xB7' between 'if' and '(', but '' found.")
        .addError(30, "Unexpected whitespace '\xB7' between '(' and '2'.")
        .addError(30, "Expected whitespace '\xB7' between '2' and '===', but '' found.")
        .addError(30, "Expected whitespace '\xB7' between '===' and '3', but '' found.")
        .addError(30, "Unexpected whitespace '\xB7' between '3' and ')'.")
        .addError(30, "Expected whitespace '\xB7' between ')' and '{', but '' found.")
        .addError(32, "Expected whitespace '\xB7' between 'switch' and '(', but '' found.")
        .addError(32, "Unexpected whitespace '\xB7' between '(' and 'a'.")
        .addError(32, "Unexpected whitespace '\xB7' between 'a' and ')'.")
        .addError(32, "Expected whitespace '\xB7' between ')' and '{', but '' found.")
        .addError(33, "Expected indentation level of 0 (col 1) but found 1 (col 5).")
        .addError(34, "Expected indentation level of 1 (col 5) but found 2 (col 9).")
        .addError(35, "Expected indentation level of 0 (col 1) but found 1 (col 5).")
        .addError(36, "Expected indentation level of 1 (col 5) but found 2 (col 9).")
        .addError(37, "Expected indentation level of 0 (col 1) but found 1 (col 5).")
        .addError(38, "Expected indentation level of 1 (col 5) but found 2 (col 9).")
        .test(src, {checkformat: true, white: false});
};

/**
 * Switch statement rules
 * different indenting rules for switch statement
 */
exports.format_switch = function () {
    var src = fs.readFileSync(__dirname + "/fixtures/format/switch.js", "utf8");

    TestRun()
        .addError(12, "Expected 'break' to have an indentation at 5 instead at 1.")
        .addError(14, "Expected 'break' to have an indentation at 5 instead at 1.")
        .addError(16, "Expected 'break' to have an indentation at 5 instead at 1.")
        .addError(45, "Expected 'case' to have an indentation at 1 instead at 5.")
        .addError(47, "Expected 'case' to have an indentation at 1 instead at 5.")
        .addError(49, "Expected 'default' to have an indentation at 1 instead at 5.")
        .addError(62, "Expected 'case' to have an indentation at 1 instead at 5.")
        .addError(63, "Expected 'break' to have an indentation at 5 instead at 9.")
        .addError(64, "Expected 'case' to have an indentation at 1 instead at 5.")
        .addError(65, "Expected 'break' to have an indentation at 5 instead at 9.")
        .addError(66, "Expected 'default' to have an indentation at 1 instead at 5.")
        .addError(67, "Expected 'break' to have an indentation at 5 instead at 9.")
        .addError(82, "Expected indentation level of 0 (col 1) but found 0 (col 3).")
        .addError(82, "Expected 'break' to have an indentation at 5 instead at 3.")
        .addError(83, "Expected indentation level of 0 (col 1) but found 0 (col 3).")
        .addError(83, "Expected 'case' to have an indentation at 1 instead at 3.")
        .addError(84, "Expected indentation level of 0 (col 1) but found 1 (col 5).")
        .addError(86, "Expected 'break' to have an indentation at 5 instead at 1.")
        .addError(99, "Expected indentation level of 1 (col 5) but found 0 (col 3).")
        .addError(99, "Expected 'break' to have an indentation at 5 instead at 3.")
        .addError(100, "Expected indentation level of 0 (col 1) but found 0 (col 3).")
        .addError(100, "Expected 'case' to have an indentation at 1 instead at 3.")
        .addError(103, "Expected indentation level of 1 (col 5) but found 0 (col 1).")
        .addError(103, "Expected 'break' to have an indentation at 5 instead at 1.")
        .addError(115, "Expected indentation level of 1 (col 5) but found 0 (col 1).")
        .addError(116, "Expected indentation level of 1 (col 5) but found 0 (col 3).")
        .addError(116, "Expected 'break' to have an indentation at 5 instead at 3.")
        .addError(117, "Expected indentation level of 1 (col 5) but found 0 (col 3).")
        .addError(117, "Expected 'case' to have an indentation at 1 instead at 3.")
        .addError(119, "Expected indentation level of 1 (col 5) but found 0 (col 1).")
        .addError(120, "Expected indentation level of 1 (col 5) but found 0 (col 1).")
        .addError(120, "Expected 'break' to have an indentation at 5 instead at 1.")
        .addError(132, "Expected indentation level of 1 (col 5) but found 0 (col 1).")
        .addError(133, "Expected indentation level of 2 (col 9) but found 0 (col 3).")
        .addError(133, "Expected 'break' to have an indentation at 5 instead at 3.")
        .addError(134, "Expected indentation level of 1 (col 5) but found 0 (col 3).")
        .addError(134, "Expected 'case' to have an indentation at 1 instead at 3.")
        .addError(135, "Expected indentation level of 2 (col 9) but found 1 (col 5).")
        .addError(136, "Expected indentation level of 1 (col 5) but found 0 (col 1).")
        .addError(137, "Expected indentation level of 2 (col 9) but found 0 (col 1).")
        .addError(137, "Expected 'break' to have an indentation at 5 instead at 1.")
        .test(src, {white: true});

    TestRun()
        .addError(82, "Expected indentation level of 0 (col 1) but found 0 (col 3).")
        .addError(83, "Expected indentation level of 0 (col 1) but found 0 (col 3).")
        .addError(84, "Expected indentation level of 0 (col 1) but found 1 (col 5).")
        .addError(99, "Expected indentation level of 1 (col 5) but found 0 (col 3).")
        .addError(100, "Expected indentation level of 0 (col 1) but found 0 (col 3).")
        .addError(103, "Expected indentation level of 1 (col 5) but found 0 (col 1).")
        .addError(115, "Expected indentation level of 1 (col 5) but found 0 (col 1).")
        .addError(116, "Expected indentation level of 1 (col 5) but found 0 (col 3).")
        .addError(117, "Expected indentation level of 1 (col 5) but found 0 (col 3).")
        .addError(119, "Expected indentation level of 1 (col 5) but found 0 (col 1).")
        .addError(120, "Expected indentation level of 1 (col 5) but found 0 (col 1).")
        .addError(132, "Expected indentation level of 1 (col 5) but found 0 (col 1).")
        .addError(133, "Expected indentation level of 2 (col 9) but found 0 (col 3).")
        .addError(134, "Expected indentation level of 1 (col 5) but found 0 (col 3).")
        .addError(135, "Expected indentation level of 2 (col 9) but found 1 (col 5).")
        .addError(136, "Expected indentation level of 1 (col 5) but found 0 (col 1).")
        .addError(137, "Expected indentation level of 2 (col 9) but found 0 (col 1).")
        .test(src, {white: false});
};

/**
 * For statement rules
 * different whitespace rules in for statement
 */
exports.format_for = function () {
    var src = fs.readFileSync(__dirname + "/fixtures/format/for.js", "utf8");

    TestRun()
        .addError(25, "Missing space after 'for'.")
        .addError(25, "Unexpected space after '('.")
        .addError(25, "Unexpected space after '++'.")
        .addError(39, "Unexpected space after '('.")
        .addError(39, "Unexpected space after '++'.")
        .addError(40, "Missing space after 'for'.")
        .addError(40, "Unexpected space after '('.")
        .addError(40, "Unexpected space after '++'.")
        .test(src, {white: true, checkformat: false});

    TestRun()
        .addError(38, "Expected whitespace '\xB7+' between '++' and ')', but '' found.")
        .addError(39, "Expected whitespace '\xB7\xB7' between 'for' and '(', but '\xB7' found.")
        .addError(40, "Expected whitespace '\xB7\xB7' between 'for' and '(', but '' found.")
        .test(src, {white: false, checkformat: true});
};