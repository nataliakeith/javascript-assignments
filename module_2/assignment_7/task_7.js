'use strict';

let dice = parseInt(prompt('Enter the number of sides of the dice'));

function roll(sides) {
    return Math.floor(Math.random()*sides)+1;
}

const numbers = [];
let result;

do {
    result = roll(dice);
    numbers.push(result);

} while (result !== dice);

let msg = '';
for (let i = 0; i < numbers.length; i++) {
    msg += (`<li>${numbers[i]}</li>`);
}
document.getElementById('dice').innerHTML = msg;