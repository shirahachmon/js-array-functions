let module = require('./data')
let array= module.array;
let positiveNumbersArray= module.positiveNumbersArray;
let positiveEvenNumbers= module.positiveEvenNumbers;
console.log(array)
console.log(positiveNumbersArray)

// The first argument in the reduce method is in defult the first index in the array,
// We do can change it if we add ',' and the value.



function sum(array){
    return array.reduce((sum, item) =>{
        if(item.price) return sum+=item.price
        else return sum+=item
},0)
}

function minValue(array) {
    return array.reduce((min, val) => 
     min < val ? min : val
    );
}

function minOddValue(array) {
    let res= array.reduce((total, item) => {
        total[item]= (total[item] || 0 ) +1 ;
        return total;
    }, {});

    for(var propt in res)
        if(propt%2==1) return [propt, res[propt]]

    return -1;
}

function maxValue(array) {
    return array.reduce((max, val) =>
        max > val ? max : val
    );
} 

console.log(minValue(positiveNumbersArray))
console.log(maxValue(positiveNumbersArray))
console.log(sum(positiveNumbersArray))
console.log(sum(array))
console.log(minOddValue(positiveNumbersArray))
console.log(minOddValue(positiveEvenNumbers))

