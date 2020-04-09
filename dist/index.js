"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math = require('gtinoco-npm-lib-project-1a-math');
/**
 * @description
 * @param n {number} Number that we are going to check if it is even or not
 */
function isEven(n) {
    return (n % 2) === 0;
}
exports.isEven = isEven;
/**
 * @description Using the old math library
 * @param type {string }Operation type that could be addition, subtraction, multiplication and division
 * @param n1 {number}
 * @param n2 {number}
 */
function operation(type, n1, n2) {
    switch (type) {
        case '+':
            return math.addition(n1, n2);
        case '-':
            return math.subtraction(n1, n2);
        case '*':
            return math.multiplication(n1, n2);
        case '/':
            return math.division(n1, n2);
        default:
            console.warn('Wrong type!');
            return;
    }
}
exports.operation = operation;
