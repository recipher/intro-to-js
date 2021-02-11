// Objects are usually created to represent entities of the real world, like users, orders and so on:

let user = {
  name: "John",
  age: 30
};

// And, in the real world, a user can act: select something from the shopping cart, login, logout etc.

// Actions are represented in JavaScript by functions in properties.

// For a start, let’s teach the user to say hello:

let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  console.log("Hello!");
};

user.sayHi(); // Hello!

// Here we’ve just used a Function Expression to create a function and 
// assign it to the property user.sayHi of the object.

// Then we can call it as user.sayHi(). The user can now speak!

// A function that is a property of an object is called its method.

// So, here we’ve got a method sayHi of the object user.

// Of course, we could use a pre-declared function as a method, like this:

let user = {
  // ...
};

// first, declare
function sayHi() {
  console.log("Hello!");
};

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello!

// There exists a shorter syntax for methods in an object literal:

// these objects do the same
user = {
  sayHi: function() {
    console.log("Hello");
  }
};

// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function()"
    console.log("Hello");
  }
};

// As demonstrated, we can omit "function" and just write sayHi().

// To tell the truth, the notations are not fully identical. 
// There are subtle differences related to object inheritance (to be covered later), 
// but for now they do not matter. In almost all cases the shorter syntax is preferred.