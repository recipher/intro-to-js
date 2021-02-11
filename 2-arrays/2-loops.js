// One of the oldest ways to cycle array items is the for loop over indexes:

let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// But for arrays there is another form of loop, for..of:

let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  console.log(fruit);
}

// The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. 
// And it’s shorter.

// Technically, because arrays are objects, it is also possible to use for..in:

let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  console.log(arr[key]); // Apple, Orange, Pear
}

// But that’s actually a bad idea. There are potential problems with it:

// The loop for..in iterates over all properties, not only the numeric ones.

// There are so-called “array-like” objects in the browser and in other environments, that look like arrays. 
// That is, they have length and indexes properties, but they may also have other non-numeric properties and methods, 
// which we usually don’t need. The for..in loop will list them though. So if we need to work with array-like objects, 
// then these “extra” properties can become a problem.

// The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. 
// Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.

// Generally, we shouldn’t use for..in for arrays.