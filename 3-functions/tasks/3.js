// Write a function pow(x,n) that returns x in power n. 
// Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) === 3 * 3 === 9
// pow(3, 3) === 3 * 3 * 3 === 27
// pow(1, 100) === 1 * 1 * ...* 1 === 1

// function pow(x, y) {
    // 1 My version
    // let runningTotal = 1;
    // for (let i = 1; i < y+1; i++) {
    //     runningTotal *=  x;
    // }
    // return runningTotal;

    // 2 Johnny's version using Array
    // let runningTotal = 1;
    // [...Array(y).keys()].forEach(function() {
    //     runningTotal *= x;
    // })
    // return runningTotal;

    // 3 Johnny's version using reduce
    // let values = [...Array(y).keys()];
    // return values.reduce(function(current) {
    //     return current * x;
    // }, 1);

    // 4 Which can be written more neatly ...
    // return [...Array(y).keys()].reduce(function(current) {
    //     return current * x;
    // }, 1);

//}

//4 is the same as
// const pow = function(x,y) {
//     return [...Array(y).keys()].reduce(function(current) {
//         return current * x;
//     }, 1);
// }

//5 using the function keyword is a little unwieldy so can use arrow functions
//This is doing the same thing
//Arrow functions are a way of making code more concise
const pow = (x,y) => [...Array(y).keys()].reduce(current => current * x, 1);

console.log(pow(2, 3));      // 8
console.log(pow(4, 5));      // 1024
console.log(pow(10, 2));     // 100
console.log(pow(1, 100));    // 1