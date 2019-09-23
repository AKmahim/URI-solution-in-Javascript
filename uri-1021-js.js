var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var line = input.split('\n');

var n = parseFloat(line.shift());
var devider1 =[100,50,20,10,5,2];
var devider2 = [1.00,0.50,0.25,0.10,0.05,0.01];

console.log('NOTAS:');
for(var i=0;i<6;i++){
    var c =n/devider1[i];
    var count = parseInt(c);
    n=(n-(count*devider1[i]));
    console.log(count + ' nota(s) de R$ '+ devider1[i] + '.00');
    
}
console.log('MOEDAS:');
for(var i=0;i<6;i++){
    var c1 =n/devider2[i];
    var count1 = parseInt(c1);
    n=(n-(count1*devider2[i]));
    // if(devider2[i] == '1.00'){
    //     console.log(count1 + ' moeda(s) de R$ '+ devider2[i] + '.00');
    // }
    // else if(devider2[i] == '0.50' || devider2[i] == '0.10'){
    //     console.log(count1 + ' moeda(s) de R$ '+ devider2[i] + '0');
    // }
    // else{
    //     console.log(count1 + ' moeda(s) de R$ '+ devider2[i]);
    // }
    var out = parseFloat(devider2[i]).toFixed(2);
    console.log(count1 + ' moeda(s) de R$ '+ out);



}