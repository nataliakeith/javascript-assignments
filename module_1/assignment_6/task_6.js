'use strict';

const answer = confirm('Should I calculate the square root?');

if (answer === true) {
    const number = parseInt(prompt('Enter a number'));
    if (number < 0) {
        document.getElementById('answer').innerHTML = ('The square root of a negative number is not defined');
    } else {
        document.getElementById('answer').innerHTML = (`The square root of ${number} is ${Math.sqrt(number)}`);
    }
}
else {
    document.getElementById('answer').innerHTML = ('The square root is not calculated.');
    }
