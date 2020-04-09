# Mathematical Operations - Operaciones matematicas
En - Module to perform simple math operations

Es - Modulo para realizar operaciones matematicas simples

## Installation
Please follow this instructions

```
    npm install gtinoco-npm-lib-project-2b-nodejs-ts
```
## Importation
```javascript
    const lib = require('gtinoco-npm-lib-project-2b-nodejs-ts')
```
```typescript
    import lib from 'gtinoco-npm-lib-project-2b-nodejs-ts';
```

## Use
Follow the above instructions

```javascript
// Import the module
const lib = require('gtinoco-npm-lib-project-2b-nodejs-ts');

// Additions
console.log('addition', lib.operation('+',1,3)); // 4
console.log('addition', lib.operation('+',91,3)); // 94

// Subtractions
console.log('subtraction', lib.operation('-', 1,3)); // -2
console.log('subtraction', lib.operation('-', 15,3)); // 12

// Multiplications
console.log('multiplication', lib.operation('*',1,3)); // 3
console.log('multiplication', lib.operation('*',0.5,3)); // 1.5

// Divisions
console.log('division', lib.operation('/',1,3)); // 0.33333
console.log('division', lib.operation('/',90,3)); // 30

// Is Even
console.log('division', lib.isEven(2)); // true
console.log('division', lib.isEven(3)); // false

```
