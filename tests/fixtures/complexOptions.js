// mixed
/*jshint boss: true, UNKNOWN: true, complex: {
    x: true,
	x: "test"
}, adsafe: true */

/*jshint complex: {
    x: true,
	y: "23",    // additional comma is allowed
} */

if (true) {
    var x = false;
}


/*jshint complex: {
    a: true,
	b: 't"ru\'e',       // string
	c: ads,             // string!
	d: function         // string!!
} */

// "jslint" should not work here.
// jslint itself would return "Unexpected '{'." and stops!
/*jslint complex: {
    x: true
} */