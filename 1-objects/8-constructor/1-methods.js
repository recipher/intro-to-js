// Using constructor functions to create objects gives a great deal of flexibility. 
// The constructor function may have parameters that define how to construct the object, 
// and what to put in it.

// Of course, we can add to this not only properties, but methods as well.

// For instance, new User(name) below creates an object with the given name and the method sayHi:

function User(name) {
  this.name = name;

  this.sayHi = function() {
    console.log("My name is: " + this.name);
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/

// To create complex objects, there’s a more advanced syntax, classes, that we’ll cover later.