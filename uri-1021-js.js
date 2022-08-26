var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let taka = parseFloat(input);;

let note = [100, 50, 20, 10, 5, 2];
let coin = [1, 0.50, 0.25, 0.10, 0.05, 0.01];


console.log("NOTAS:")

for(let i=0; i<note.length; i++) {
    let count = parseInt(taka/note[i]);
    console.log(`${count} nota(s) de R$ ${note[i].toFixed(2)}`);
    taka = taka % note[i];

}

console.log("MOEDAS:");


for(let i = 0; i<coin.length; i++){
    let count = parseInt(taka/coin[i]);
    console.log(`${count} moeda(s) de R$ ${coin[i].toFixed(2)}`);
    taka= (taka%coin[i]) + 0.00001;

}