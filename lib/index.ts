const math = require('gtinoco-npm-lib-project-1a-math');

/**
 * @description
 * @param n {number} Number that we are going to check if it is even or not
 */
export function isEven(n: number): boolean {
    return (n % 2) === 0
}


/**
 * @description Using the old math library
 * @param type {string }Operation type that could be addition, subtraction, multiplication and division
 * @param n1 {number}
 * @param n2 {number}
 */
export function operation(type: string, n1: number, n2: number) {
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
