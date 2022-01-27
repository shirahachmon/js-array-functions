let module = require('./arrayForExample')
let array= module.array;

console.log(array)

// Some function
hasExpensiveItems = array.some((item) => item.price>=1000)
console.log(hasExpensiveItems); // Returns boolean

// Every function
ifAllItemsGreaterThan1000 = array.every((item) => item.price>=1000)
console.log(ifAllItemsGreaterThan1000); // Returns boolean



