let module = require('./arrayForExample')
let array= module.array;

console.log(array)


// Reduce function
sumCalculation= array.reduce((sum, item)=>
    sum+=item.price, 0)
// Another option:
// sumCalculation= array.reduce((sum, item)=>{
// return sum+=item.price}, 0)

console.log(sumCalculation);

