// There is one more syntax to create an array:

let arr = new Array("Apple", "Pear", "etc");

// It’s rarely used, because square brackets [] are shorter. Also there’s a tricky feature with it.

// If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length.

// Let’s see how one can shoot themself in the foot:

let arr = new Array(2); // will it create an array of [2] ?

console.log(arr[0]); // undefined! no elements.

console.log(arr.length); // length 2

// In the code above, new Array(number) has all elements undefined.

// To evade such surprises, we usually use square brackets, unless we really know what we’re doing.