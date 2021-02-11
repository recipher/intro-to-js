// Arrays do not form a separate language type. They are based on objects.
// So typeof does not help to distinguish a plain object from an array:

console.log(typeof {}); // object
console.log(typeof []); // same

// But arrays are used so often that there’s a special method for that: Array.isArray(value). 
// It returns true if the value is an array, and false otherwise.

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true