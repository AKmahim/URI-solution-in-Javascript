var input= require('fs').readFileSync('/dev/stdin','utf8');
// var line =input.split(' ');
var sep = [' ', '\n'];
// console.log(separators.join('|'));
var line = input.split(new RegExp(sep.join('|'), 'g'));

var n1,n2,n3,n4,ex_num,media,final_num;

n1=parseFloat(line.shift());
n2 = parseFloat(line.shift());
n3 = parseFloat(line.shift());
n4 = parseFloat(line.shift());

media=((n1*2)+(n2*3)+(n3*4)+(n4*1) )/10;

console.log('Media: ' + media.toFixed(1));


if(media >= 7.0){
    console.log("Aluno aprovado.");
}
else if(media <5.0){
    console.log("Aluno reprovado.");
}
else if(media >=5.0 && media <=6.9){
    console.log("Aluno em exame.");
    // scanf("%f",&ex_num);
    ex_num =parseFloat(line.shift());
    console.log("Nota do exame: " + ex_num.toFixed(1));

    final_num=(media+ex_num)/2;

    if(final_num >= 5.0){
        console.log("Aluno aprovado.");
    }
    else{
        console.log("Aluno reprovado.");
    }
    console.log("Media final: " + final_num.toFixed(1));


}