// Now let’s cover methods that search in an array.

// indexOf/lastIndexOf and includes

// The methods arr.indexOf, arr.lastIndexOf and arr.includes 
// have the same syntax and do essentially the same as their string counterparts, 
// but operate on items instead of characters:

arr.indexOf(item, from) // looks for item starting from index from, and returns the index where it was found, 
                        // otherwise -1.
arr.lastIndexOf(item, from) // same, but looks for from right to left.
arr.includes(item, from) // looks for item starting from index from, returns true if found.

// For instance:

 let arr = [1, 0, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1

console.log(arr.includes(1)); // true

// Note that the methods use === comparison. 
// So, if we look for false, it finds exactly false and not the zero.

// If we want to check for inclusion, and don’t want to know the exact index, then arr.includes is preferred.

// Also, a very minor difference of includes is that it correctly handles NaN, unlike indexOf/lastIndexOf:

const arr = [NaN];
console.log( arr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN)
console.log( arr.includes(NaN) );// true (correct)

// find and findIndex

// Imagine we have an array of objects. How do we find an object with the specific condition?

// Here the arr.find(fn) method comes in handy.

// The syntax is:

let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});

// The function is called for elements of the array, one after another:

// item is the element.
// index is its index.
// array is the array itself.

// If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

// For example, we have an array of users, each with the fields id and name. Let’s find the one with id == 1:

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

console.log(user.name); // John

// In real life arrays of objects is a common thing, so the find method is very useful.

// Note that in the example we provide to find the function item => item.id == 1 with one argument. 
// That’s typical, other arguments of this function are rarely used.

// The arr.findIndex method is essentially the same, 
// but it returns the index where the element was found instead of the element itself 
// and -1 is returned when nothing is found.

// filter

// The find method looks for a single (first) element that makes the function return true.

// If there may be many, we can use arr.filter(fn).

// The syntax is similar to find, but filter returns an array of all matching elements:

let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});

// For instance:

 let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 2