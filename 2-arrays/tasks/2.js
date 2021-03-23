// Write the function sumInput() that:

// Calculates and returns the sum of array items
// Ignores non-numeric values

//let array = new Array("10", "20", "30");

//My solution
const sumInput = function(array) {
    let total = 0;
 
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== '' && array[i] !== null && isFinite(array[i])){
            total = total + array[i];
        }
    }
    return total;
}

console.log(sumInput([10, 20, 30, 'bananas', 7]));

//JH solution
const sumInputJH = function(array){
    let sum = 0;
    for (let value of array) {
        if (value !== '' && value !== null && isFinite(value)){
            sum += value;
        }
    }
    return sum;
}

//Another solution using forEach
const sumInputJH2 = function(array){
    let sum = 0;

    array.forEach((value, ix) => {  //arrow notation is same as array.forEach(function(value) {
        if (value !== '' && value !== null && isFinite(value)){
            sum += value;
            console.log(ix);
        }
    });
}

//using accumulator
const sumInputJH3 = function(array){
    let sum = 0;

    const sum = array.reduce(function(accumulator, value) {
        if (value !== '' && value !== null && isFinite(value)){
            return accumulator + value;
        }
        return accumulator;
    }, 0);
    return sum;
}
