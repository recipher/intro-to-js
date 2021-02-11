// For multiword properties, the dot access doesn’t work:

 // this would give a syntax error
user.likes birds = true

// JavaScript doesn’t understand that. It thinks that we address user.likes, and then gives a syntax error when comes across unexpected birds.

// The dot requires the key to be a valid variable identifier. 
// That implies: contains no spaces, doesn’t start with a digit 
// and doesn’t include special characters ($ and _ are allowed).

// There’s an alternative “square bracket notation” that works with any string:

let user = {};

// set
user["likes birds"] = true;

// get
console.log(user["likes birds"]); // true

// delete
delete user["likes birds"];

// Now everything is fine. Please note that the string inside the brackets is properly quoted (any type of quotes will do).

// Square brackets also provide a way to obtain the property name as the result of any expression – 
// as opposed to a literal string – like from a variable as follows:

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

// Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility.

// For instance:

let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
console.log(user[key]); // John (if enter "name")

// The dot notation cannot be used in a similar way:

 let user = {
  name: "John",
  age: 30
};

let key = "name";
console.log(user.key); // undefined

// Computed properties

// We can use square brackets in an object literal, when creating an object. That’s called computed properties.

// For instance:

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log(bag.apple); // 5 if fruit="apple"

// The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.

// So, if a visitor enters "apple", bag will become {apple: 5}.

// Essentially, that works the same as:

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;

// But looks nicer.

// We can use more complex expressions inside square brackets:

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

// Square brackets are much more powerful than the dot notation. 
// They allow any property names and variables. But they are also more cumbersome to write.

// So most of the time, when property names are known and simple, the dot is used. 
// And if we need something more complex, then we switch to square brackets.