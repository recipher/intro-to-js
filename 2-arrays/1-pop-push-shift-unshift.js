// A queue is one of the most common uses of an array. 
// In computer science, this means an ordered collection of elements which supports two operations:

// * push appends an element to the end.
// * shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

// Arrays support both operations.

// In practice we need it very often. For example, a queue of messages that need to be shown on-screen.

// There’s another use case for arrays – the data structure named stack.

// It supports two operations:

// * push adds an element to the end.
// * pop takes an element from the end.

// So new elements are added or taken always from the “end”.

// A stack is usually illustrated as a pack of cards: new cards are added to the top or taken from the top:

// For stacks, the latest pushed item is received first, that’s also called LIFO (Last-In-First-Out) principle. 
// For queues, we have FIFO (First-In-First-Out).

// Arrays in JavaScript can work both as a queue and as a stack. 
// They allow you to add/remove elements both to/from the beginning or the end.

// In computer science the data structure that allows this, is called deque.

// Methods that work with the end of an array

// pop
// Extracts the last element of the array and returns it:

let fruits = ["Apple", "Orange", "Pear"];

console.log(fruits.pop()); // remove "Pear" and console.log it

console.log(fruits); // Apple, Orange

// push
// Append the element to the end of the array:

let fruits = ["Apple", "Orange"];

fruits.push("Pear");

console.log(fruits); // Apple, Orange, Pear

// The call fruits.push(...) is equal to fruits[fruits.length] = ....

// Methods that work with the start of an array

// shift
// Extracts the first element of the array and returns it:

 let fruits = ["Apple", "Orange", "Pear"];

console.log( fruits.shift() ); // remove Apple and console.log it

console.log( fruits ); // Orange, Pear

// unshift
// Add the element to the beginning of the array:

let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

console.log(fruits); // Apple, Orange, Pear
// Methods push and unshift can add multiple elements atß once:

let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Appßle", "Orange", "Peach"]
console.log(fruits);