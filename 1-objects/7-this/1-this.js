// It’s common that an object method needs to access the information stored in the object to do its job.

// For instance, the code inside user.sayHi() may need the name of the user.

// To access the object, a method can use the this keyword.

// The value of this is the object “before dot”, the one used to call the method.

// For instance:

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
  }
};

user.sayHi(); // John

// Here during the execution of user.sayHi(), the value of this will be user.

// Technically, it’s also possible to access the object without this, 
// by referencing it via the outer variable:

let user = {
  name: "John",
  age: 30,

  sayHi() {
    console.log(user.name); // "user" instead of "this"
  }
};

// But such code is unreliable. If we decide to copy user to another variable, 
// e.g. admin = user and overwrite user with something else, then it will access the wrong object.

// That’s demonstrated below:

let user = {
  name: "John",
  age: 30,

  sayHi() {
    console.log( user.name ); // leads to an error
  }
};


let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null

// If we used this.name instead of user.name inside the console.log, then the code would work.