'use strict';
const a = parseInt(prompt('Enter first number'));
const b = parseInt(prompt('Enter second number'));
const c = parseInt(prompt('Enter third number'));


const sum = a + b + c
const prod = a * b * c
const avg = sum / 3

document.getElementById('result').innerHTML =
    (`The sum of the numbers is ${sum}, the product is ${prod}, the average is ${avg}`);
