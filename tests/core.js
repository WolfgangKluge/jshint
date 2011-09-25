/*jshint boss: true, laxbreak: true, node: true, devel: true */

var JSHINT  = require('../jshint.js').JSHINT,
    assert  = require('assert'),
    fs      = require('fs'),
    TestRun = require("./testhelper").setup.testRun;

/** JSHint must pass its own check */
exports.checkJSHint = function () {
    var res = JSHINT(fs.readFileSync(__dirname + "/../jshint.js", "utf8"));

    if (!res)
        console.log(JSHINT.errors);

    assert.ok(res);
    assert.isUndefined(JSHINT.data().implieds);
};

/** Rhino wrapper must pass JSHint check */
exports.checkRhino = function () {
    var src = fs.readFileSync(__dirname + "/../env/jshint-rhino.js", "utf8");
    TestRun().test(src, { rhino: true });
};

/** All test files must pass JSHint check */
exports.checkTestFiles = function () {
    var files = [ 'core.js', 'envs.js', 'options.js' ];

    for (var i = 0, name; name = files[i]; i++) {
        var src = fs.readFileSync(__dirname + '/../tests/' + name, 'utf8'),
            res = JSHINT(src);

        if (!res)
            console.log(JSHINT.errors);

        assert.ok(res);
        assert.isUndefined(JSHINT.data().implieds);
    }
};

/**
 * JSHint allows you to specify custom globals as a parameter to the JSHINT
 * function so it is not necessary to spam code with jshint-related comments
 */
exports.testCustomGlobals = function () {
    var code   = '(function () { return [ fooGlobal, barGlobal ]; }());',
        custom = { fooGlobal: false, barGlobal: false };

    assert.ok(JSHINT(code, {}, custom));

    var report = JSHINT.data();
    assert.isUndefined(report.implieds);
    assert.eql(report.globals.length, 2);

    var dict = {};
    for (var i = 0, g; g = report.globals[i]; i++)
        dict[g] = true;

    for (i = 0, g = null; g = custom[i]; i++)
        assert.ok(g in dict);
};

/** Test that JSHint recognizes `new Array(<expr>)` as a valid expression */
exports.testNewArray = function () {
    var code  = 'new Array(1);',
        code1 = 'new Array(v + 1);',
        code2 = 'new Array("hello", "there", "chaps");';

    TestRun().test(code);
    TestRun().test(code1);
    TestRun().test(code2);

    TestRun()
        .addError(1, "Use the array literal notation [].")
        .test('new Array();');
};

/**
 * Test that JSHint allows `undefined` to be a function parameter.
 * It is a common pattern to protect against the case when somebody
 * overwrites undefined. It also helps with minification.
 *
 * More info: https://gist.github.com/315916
 */
exports.testUndefinedAsParam = function () {
    var code  = '(function (undefined) {}());',
        code1 = 'var undefined = 1;';

    TestRun().test(code);
    // But it must never tolerate reassigning of undefined
    TestRun()
        .addError(1, "Expected an identifier and instead saw 'undefined' (a reserved word).")
        .test(code1);
};

/** Tests that JSHint accepts new line after a dot (.) operator */
exports.newLineAfterDot = function () {
    TestRun().test([ "chain().chain().", "chain();" ]);
};

/**
 * JSHint does not tolerate deleting variables.
 * More info: http://perfectionkills.com/understanding-delete/
 */
exports.noDelete = function () {
    TestRun()
        .addError(1, 'Variables should not be deleted.')
        .test('delete NullReference;');
};

/**
 * JSHint allows case statement fall through only when it is made explicit
 * using special comments.
 */
exports.switchFallThrough = function () {
    var src = fs.readFileSync(__dirname + '/fixtures/switchFallThrough.js', 'utf8');
    TestRun()
        .addError(3, "Expected a 'break' statement before 'case'.")
        .addError(18, "Expected a 'break' statement before 'default'.")
        .test(src);
};

exports.testVoid = function () {
    var code = [
        "void(0);"
      , "void 0;"
      , "var a = void(1);"
    ];
    TestRun().test(code);
};

exports.functionScopedOptions = function () {
    var src = fs.readFileSync(__dirname + '/fixtures/functionScopedOptions.js', 'utf8');
    TestRun()
        .addError(1, "eval is evil.")
        .addError(8, "eval is evil.")
        .test(src);
};

/** JSHint should not only read jshint, but also jslint options */
exports.jslintOptions = function() {
    var src = fs.readFileSync(__dirname + '/fixtures/jslintOptions.js', 'utf8');
    TestRun().test(src);
<<<<<<< HEAD
};

exports.caseExpressions = function() {
    var src = fs.readFileSync(__dirname + '/fixtures/caseExpressions.js', 'utf8');
    TestRun()
        .addError(2, "This 'switch' should be an 'if'.")
        .test(src);
};

exports.complexOptions = function() {
    var src = fs.readFileSync(__dirname + '/fixtures/complexOptions.js', 'utf8');

    assert.ok(!JSHINT(src, {complex: true}));
    assert.eql(JSHINT.errors.length, 13);
    assert.eql(JSHINT.errors[0].line, 2);
    assert.eql(JSHINT.errors[0].reason, "Unknown complex option 'complex'.");
    assert.eql(JSHINT.errors[1].line, 3);
    assert.eql(JSHINT.errors[1].reason, "Unknown option 'x'.");
    assert.eql(JSHINT.errors[2].line, 7);
    assert.eql(JSHINT.errors[2].reason, "Unknown complex option 'complex'.");
    assert.eql(JSHINT.errors[3].line, 8);
    assert.eql(JSHINT.errors[3].reason, "Unknown option 'x'.");
    assert.eql(JSHINT.errors[4].line, 9);
    assert.eql(JSHINT.errors[4].reason, "Unknown option 'y'.");
    assert.eql(JSHINT.errors[5].line, 17);
    assert.eql(JSHINT.errors[5].reason, "Unknown complex option 'complex'.");
    assert.eql(JSHINT.errors[6].line, 18);
    assert.eql(JSHINT.errors[6].reason, "Unknown option 'a'.");
    assert.eql(JSHINT.errors[7].line, 19);
    assert.eql(JSHINT.errors[7].reason, "Unknown option 'b'.");
    assert.eql(JSHINT.errors[8].line, 20);
    assert.eql(JSHINT.errors[8].reason, "Unknown option 'c'.");
    assert.eql(JSHINT.errors[9].line, 21);
    assert.eql(JSHINT.errors[9].reason, "Unknown option 'd'.");
    assert.eql(JSHINT.errors[10].line, 26);
    assert.eql(JSHINT.errors[10].reason, "Bad option value.");
    assert.eql(JSHINT.errors[11].line, 28);
    assert.eql(JSHINT.errors[11].reason, "Bad option.");
    assert.eql(JSHINT.errors[12].line, 28);
    assert.eql(JSHINT.errors[12].reason, "Missing option value.");
=======
>>>>>>> 18fa6ae... Use testHelper for tests
};
