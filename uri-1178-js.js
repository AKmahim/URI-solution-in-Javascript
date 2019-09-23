var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

    var i;
    var temp,n;
    // scanf("%lf",&n);
    n=parseFloat(line.shift());
    temp=n;
    for(i=0;i<100;i++){
        console.log('N['+i+'] = '+temp.toFixed(4));
        
        // printf("N[%d] = %.4lf\n",i,temp);
        temp=n/2.0000;
        n=temp;

    }