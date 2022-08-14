// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
let module = require('./data')
// let nums= module.numbersArray;
// let target= module.target;
// let words= module.words;

// Set
const myArray=[1,2,3,4,5,5,5,6];
const mySet= new Set(myArray); // Set {1,2,3,4,5,6}
const setConvertToArray= [...mySet] // Gives an array from the set. [1,2,3,4,5,6]

const myMap= new Map([['name', 'shira'],['lastName', 'hachmon']])
myMap.set('a', 'b')
console.log(myMap);

