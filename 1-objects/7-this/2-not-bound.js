// In JavaScript, keyword this behaves unlike most other programming languages. 
// It can be used in any function, even if it’s not a method of an object.

// There’s no syntax error in the following example:

function sayHi() {
  console.log(this.name);
}

// The value of this is evaluated during the run-time, depending on the context.

// For instance, here the same function is assigned to two different objects 
// and has different “this” in the calls:

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

// The rule is simple: if obj.f() is called, then this is obj during the call of f. 
// So it’s either user or admin in the example above.

// Calling without an object: this == undefined
// We can even call the function without an object at all:

function sayHi() {
  console.log(this);
}

sayHi(); // undefined

// In this case this is undefined in strict mode. If we try to access this.name, there will be an error.

// In non-strict mode the value of this in such case will be the global object (window in a browser). 
// This is a historical behavior that "use strict" fixes.

// Usually such call is a programming error. 
// If there’s this inside a function, it expects to be called in an object context.

// The consequences of unbound this

// If you come from another programming language, 
// then you are probably used to the idea of a "bound this", 
// where methods defined in an object always have this referencing that object.

// In JavaScript this is “free”, its value is evaluated at call-time 
// and does not depend on where the method was declared, but rather on what object is “before the dot”.

// The concept of run-time evaluated this has both pluses and minuses. 

// On the one hand, a function can be reused for different objects. 
// On the other hand, the greater flexibility creates more possibilities for mistakes.

// Here our position is not to judge whether this language design decision is good or bad. 
// We’ll understand how to work with it, how to get benefits and avoid problems.

// Arrow functions have no “this”

// Arrow functions are special: they don’t have their “own” this. 
// If we reference this from such a function, it’s taken from the outer “normal” function.

// For instance, here arrow() uses this from the outer user.sayHi() method:

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya

// That’s a special feature of arrow functions, 
// it’s useful when we actually do not want to have a separate this, 
// but rather to take it from the outer context. 
// Later we’ll go more deeply into arrow functions.