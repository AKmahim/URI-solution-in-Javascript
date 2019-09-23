var i,j=1;
    var sum=1;
    for(i=3.0;i<=39.0;i+=2.0){
        sum=sum+(i/(j*2));
        j=j*2;
    }
    // printf("%.2f\n",sum);
    console.log(sum.toFixed(2));
    