var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var i,j;
for(i=1,j=60;j >=0;i=i+3,j=j-5){
    console.log('I='+i+' J='+j);
    // ("I=%d J=%d\n",i,j);
}