// let module = require('./arrayForExample')
// let array= module.array;

// console.log(array)


// // Filter function:
// priceUnderHundred= array.filter((item)=> item.price<100);
// console.log(priceUnderHundred);

// priceUnderHundredAndNameBook= array.filter((item)=>{
//     return item.price<100 && item.name=='Book'
// });
// console.log(priceUnderHundredAndNameBook);


// // Map function:
// getAllPrices = array.map((item)=> item.price);
// console.log(getAllPrices)

// getStringData= array.map((item)=>{
// return `${item.name} : ${item.price}`;
// })
// console.log(getStringData);

// ex= array.map((value, index, array) => {
//     // array[index]+1
//     return index
// })
//  console.log(ex);

//  // Map function on an object
// const object= {
//     a: 1, 
//     b: 2, 
//     c:3
// }

// const newArrayFromAnObject= Object.entries(object);
// console.log(newArrayFromAnObject);

// const newOne= newArrayFromAnObject.map(([key, value]) => [key, value+1])
// console.log(newOne);




// // Some function
// hasExpensiveItems = array.some((item) => item.price>=1000)
// console.log(hasExpensiveItems); // Returns boolean




// // Every function
// ifAllItemsGreaterThan1000 = array.every((item) => item.price>=1000)
// console.log(ifAllItemsGreaterThan1000); // Returns boolean




// // Reduce function
// sumCalculation= array.reduce((sum, item)=>
//     sum+=item.price, 0)
// // Another option:
// // sumCalculation= array.reduce((sum, item)=>{
// // return sum+=item.price}, 0)

// console.log(sumCalculation);

