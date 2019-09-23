var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split();

var  i,n;
    // scanf("%d",&n);
    n=parseInt(line.shift());
    var res = '';
    for(i=1;i<n;i++){
        // printf("Ho ");
        // console.log('Ho ');
        res += 'Ho ';

    }
    // printf("Ho!\n");
    console.log(res + 'Ho!');
    