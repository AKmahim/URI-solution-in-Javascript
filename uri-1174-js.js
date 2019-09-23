var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var i,j;
    // dou ara[100];
    var ara=[];
    for(i=0;i<100;i++){
        // scanf("%lf",&ara[i]);
        ara[i]=parseFloat(line.shift());
    }

    for(j=0;j<100;j++){
            if(ara[j]<=10){
                console.log('A['+j+'] = '+ara[j].toFixed(1));
            }

    }