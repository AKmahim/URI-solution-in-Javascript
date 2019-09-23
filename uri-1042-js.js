var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split(' ');

var a = parseInt(line.shift());
var b  = parseInt(line.shift());
var c = parseInt(line.shift());

var ara =[a,b,c];
// console.log(ara);
ara.sort(function (a,b){
    return a-b;
});
// console.log(ara);
console.log(ara[0]+ '\n'+ ara[1]+ '\n'+ ara[2]+'\n');
console.log(a+'\n'+b+'\n'+c);