'use strict';
const numbers = [];

while (true) {
    let number = parseInt(prompt('Enter a number'));

    if (numbers.includes(number)) {
        console.log('Number already given')
        break
    }
numbers.push(number)
}


numbers.sort((a, b) => a-b);

console.log(numbers)



