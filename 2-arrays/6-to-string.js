// Arrays have their own implementation of toString method that returns a comma-separated list of elements.

// For instance:

let arr = [1, 2, 3];

console.log(arr); // 1,2,3
console.log(String(arr) === '1,2,3'); // true

// Also, let’s try this:

console.log([] + 1 ); // "1"
console.log([1] + 1 ); // "11"
console.log([1,2] + 1 ); // "1,21"

// Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".

// When the binary plus "+" operator adds something to a string, it converts it to a string as well, so the next step looks like this:

console.log( "" + 1 ); // "1"
console.log( "1" + 1 ); // "11"
console.log( "1,2" + 1 ); // "1,21"