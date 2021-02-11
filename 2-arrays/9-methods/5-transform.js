// Let’s move on to methods that transform and reorder an array.

// map

// The arr.map method is one of the most useful and often used.

// It calls the function for each element of the array and returns the array of results.

// The syntax is:

let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});

// For instance, here we transform each element into its length:

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

// sort(fn)

// The call to arr.sort() sorts the array in place, changing its element order.

// It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.

// For instance:

let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

console.log(arr);  // 1, 15, 2

// Did you notice anything strange in the outcome?

// The order became 1, 15, 2. Incorrect. But why?

// The items are sorted as strings by default.

// Literally, all elements are converted to strings for comparisons. 
// For strings, lexicographic ordering is applied and indeed "2" > "15".

// To use our own sorting order, we need to supply a function as the argument of arr.sort().

// The function should compare two arbitrary values and return:

function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}

// For instance, to sort as numbers:

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

console.log(arr);  // 1, 2, 15

// Now it works as intended.

// Let’s step aside and think what’s happening. 
// The arr can be array of anything, right? 
// It may contain numbers or strings or objects or whatever. 
// We have a set of some items. 
// To sort it, we need an ordering function that knows how to compare its elements. 
// The default is a string order.

// The arr.sort(fn) method implements a generic sorting algorithm. 
// We don’t need to care how it internally works (an optimized quicksort most of the time). 
// It will walk the array, compare its elements using the provided function and reorder them, 
// all we need is to provide the fn which does the comparison.

// By the way, if we ever want to know which elements are compared – nothing prevents from console.loging them:

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  console.log( a + " <> " + b );
  return a - b;
});

// The algorithm may compare an element with multiple others in the process, 
// but it tries to make as few comparisons as possible.

// A comparison function may return any number
// Actually, a comparison function is only required to return a positive number to say “greater” 
// and a negative number to say “less”.

// That allows to write shorter functions:

let arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { return a - b; });

console.log(arr);  // 1, 2, 15

// Arrow functions for the best

arr.sort((a, b) => a - b);

// This works exactly the same as the longer version above.

// Use localeCompare for strings
// Remember strings comparison algorithm? It compares letters by their codes by default.

// For many alphabets, it’s better to use str.localeCompare method to correctly sort letters, such as Ö.

// For example, let’s sort a few countries in German:

let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log(countries.sort((a, b) => a > b ? 1 : -1)); // Andorra, Vietnam, Österreich (wrong)

console.log(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (correct!)

// reverse

// The method arr.reverse reverses the order of elements in arr.

// For instance:

let arr = [1, 2, 3, 4, 5];
arr.reverse();

console.log(arr); // 5,4,3,2,1

// It also returns the array arr after the reversal.

// split and join

// Here’s the situation from real life. 
// We are writing a messaging app, and the person enters the comma-delimited list of receivers: 
// John, Pete, Mary. 
// But for us an array of names would be much more comfortable than a single string. 
// How to get it?

// The str.split(delim) method does exactly that. 
// It splits the string into an array by the given delimiter delim.

// In the example below, we split by a comma followed by space:

let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}

// The split method has an optional second numeric argument – a limit on the array length. 
// If it is provided, then the extra elements are ignored. In practice it is rarely used though:

let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

console.log(arr); // Bilbo, Gandalf

// Split into letters

// The call to split(s) with an empty s would split the string into an array of letters:

let str = "test";

console.log( str.split('') ); // t,e,s,t

// The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.

// For instance:

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); // glue the array into a string using ;

console.log(str); // Bilbo;Gandalf;Nazgul

// reduce/reduceRight

// When we need to iterate over an array – we can use forEach, for or for..of.

// When we need to iterate and return the data for each element – we can use map.

// The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. 
// They are used to calculate a single value based on the array.

// The syntax is:

let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);

// The function is applied to all array elements one after another and “carries on” its result to the next call.

// Arguments:

// accumulator – is the result of the previous function call, equals initial the first time 
//   (if initial is provided).
// item – is the current array item.
// index – is its position.
// array – is the array.

// As function is applied, the result of the previous function call is passed 
// to the next one as the first argument.

// So, the first argument is essentially the accumulator that stores the combined result 
// of all previous executions. And at the end it becomes the result of reduce.

// Sounds complicated?

// The easiest way to grasp that is by example.

// Here we get a sum of an array in one line:

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); // 15

// The function passed to reduce uses only 2 arguments, that’s typically enough.

// Let’s see the details of what’s going on.

// On the first run, sum is the initial value (the last argument of reduce), equals 0, 
//   and current is the first array element, equals 1. So the function result is 1.
// On the second run, sum = 1, we add the second array element (2) to it and return.
// On the 3rd run, sum = 3 and we add one more element to it, and so on…

// The calculation flow:

// Or in the form of a table, where each row represents a function call on the next array element:

// sum	current	result
// the first call	0	1	1
// the second call	1	2	3
// the third call	3	3	6
// the fourth call	6	4	10
// the fifth call	10 5 15

// Here we can clearly see how the result of the previous call becomes the first argument of the next one.

// We also can omit the initial value:

let arr = [1, 2, 3, 4, 5];

// removed initial value from reduce (no 0)
let result = arr.reduce((sum, current) => sum + current);

console.log(result); // 15

// The result is the same. That’s because if there’s no initial, 
// then reduce takes the first element of the array as the initial value and 
// starts the iteration from the 2nd element.

// The calculation table is the same as above, minus the first row.

// But such use requires an extreme care. 
// If the array is empty, then reduce call without initial value gives an error.

// Here’s an example:

let arr = [];

// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
arr.reduce((sum, current) => sum + current);

// So it’s advised to always specify the initial value.

// The method arr.reduceRight does the same, but goes from right to left.