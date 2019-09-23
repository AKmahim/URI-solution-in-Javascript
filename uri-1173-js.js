var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var i,j,n,temp;
    // int ara[10];
    var ara=[];
    // scanf("%d",&n);
    n=parseInt(line.shift());

    temp=n;
    for(i=0;i<10;i++){
        ara[i]=temp;
        temp=temp*2;
    }
    for(j=0;j<10;j++){
        console.log('N['+j+'] = '+ara[j]);
    }