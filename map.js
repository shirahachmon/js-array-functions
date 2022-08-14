let module = require('./data')
let array= module.array;
let words = module.words;

console.log(array)

// Map function:
getAllPrices = array.map((item)=> item.price);
console.log(getAllPrices)

getStringData= array.map((item)=>{
return `${item.name} : ${item.price}`;
})
console.log(getStringData);

ex= array.map((value, index, array) => {
    // array[index]+1
    return index
})
 console.log(ex);

 // Map function on an object
const object= {
    a: 1, 
    b: 2, 
    c:3
}

const newArrayFromAnObject= Object.entries(object);
console.log(newArrayFromAnObject);

const newOne= newArrayFromAnObject.map(([key, value]) => [key, value+1])
console.log(newOne);
