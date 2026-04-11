'use strict';


function roll() {
    return Math.floor(Math.random()*6)+1;
}

const numbers = []
let result;

do {
    result = roll();
    numbers.push(result);

} while (result !== 6);

let msg = '';
for (let i = 0; i < numbers.length; i++) {
    msg += (`<li>${numbers[i]}</li>`);
}
document.getElementById('function').innerHTML = msg;