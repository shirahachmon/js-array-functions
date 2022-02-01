
let module = require('./data')
let array= module.numbersArray;

// Four ways to get the last element in an array
console.log(array[array.length-1])
console.log(array.slice(-1)[0])
console.log(array.slice().pop())
console.log(array.reverse()[0])