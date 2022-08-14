let module = require('./data')
let array= module.numbersArray;

// Four ways to get the last element in an array
console.log(array[array.length-1])
console.log(array.slice(-1)[0])
console.log(array.slice().pop())
console.log(array.reverse()[0])


// To get the power of a number, there is two options
let number = 2;
let exponent = 3;

console.log( number ** exponent)
console.log( Math.pow(number, exponent))


// let sortedArray= array.sort() // That will bring me [-6, 11,15,3,7]
// So... how can i sort it fr?
let sortedArray= array.sort((a, b)=> a-b); // Remember this! 

// Tricks with the etension on Quokka.js
const array1=[1,2,3]
const array2=[4,5,6]

array1/*?*/.concat(array2) // /*?*/ Gonna give me only debug of the first array. 
// Also we can do:
array1/*? $[0]*/.concat(array2) // Gonna give me the first index of the first array. 

array1.concat(array2)/*?*/
 // Gonna give me the value of what weve done in this row. 
