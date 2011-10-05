
function a() {
    /*jshint format: {
        rules: {
            for: {
                parenthesis_expr: "",
                expr_parenthesis: "",
                identifier_parenthesis: " "
            }
        }
    }*/
    for (var i; i < 3; i++) {}
}

function b() {
    /*jshint format: {
        rules: {
            for: {
                parenthesis_expr: " ",
                expr_parenthesis: " ",
                identifier_parenthesis: ""
            }
        }
    }*/
    for( var i; i < 3; i++ ) {}
}

function c() {
    /*jshint format: {
        rules: {
            for: {
                parenthesis_expr: " *",
                expr_parenthesis: " +",
                identifier_parenthesis: "  "
            }
        }
    }*/
    for  (var i; i < 3; i++) {}
    for ( var j; j < 3; j++ ) {}
    for(  var k; k < 3; k++  ) {}
}