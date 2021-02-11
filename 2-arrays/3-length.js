// The length property automatically updates when we modify the array. 
// To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

// For instance, a single element with a large index gives a big length:

let fruits = [];
fruits[123] = "Apple";

console.log(fruits.length); // 124

// Note that we usually don’t use arrays like that.

// Another interesting thing about the length property is that it’s writable.
// If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible, here’s the example:

let arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
console.log(arr); // [1, 2]

arr.length = 5; // return length back
console.log(arr[3]); // undefined: the values do not return

// So, the simplest way to clear the array is: arr.length = 0;.