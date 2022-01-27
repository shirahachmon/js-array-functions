let module = require('./arrayForExample')
let array= module.array;

console.log(array)


// Filter function:
priceUnderHundred= array.filter((item)=> item.price<100);
console.log(priceUnderHundred);

priceUnderHundredAndNameBook= array.filter((item)=>{
    return item.price<100 && item.name=='Book'
});
console.log(priceUnderHundredAndNameBook);

