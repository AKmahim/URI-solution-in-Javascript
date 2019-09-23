var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split(' ');

var a =parseInt(line.shift());
var b = parseInt(line.shift());
var c = parseInt(line.shift());

if(a>b && a>c){
    console.log(a + ' eh o maior');
    
}
else if (b>a && b>c) {
    console.log(b + ' eh o maior');
    
}
 else {
    console.log(c + ' eh o maior');

}