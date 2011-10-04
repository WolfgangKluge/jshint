/*jshint maxerr: 100*/
function hello( ){
    return +2 ;
}
var x=function( a , b ){} ;

try{ // correct version
    throw "test" . toString();
} catch(ex){}

while( true ){
}

do{
} while( true );

for( var i; i<3; i++ ){}

var a=2 ,b=3 ,
c = 3,
d = 4;
a|=3 ;

var to={
     a:2,
    b: 3,
    c: 4
};

if( 1===2 ){}else if( 2===3 ){}

switch( a ){
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}
