const x = [-4,3,-9,0,4,1]

let positif = x.filter(x => x > 0).length;
let negatif = x.filter(x =>x < 0).length;
let zero = x.filter(x =>x === 0).length;
let numbersCount=x.length;

console.log((positif/numbersCount).toFixed(5) + '\n' +
            (negatif/numbersCount).toFixed(5) + '\n'+
            (zero/numbersCount).toFixed(5));