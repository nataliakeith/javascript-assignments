'use strict';

const numbers = [];
let number = parseInt(prompt('Enter a number'));

while (number !== 0) {
    numbers.push(number);
    number = parseInt(prompt('Enter a number'));

}

numbers.sort((a,b) => b-a);
console.log(numbers);

