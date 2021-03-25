// In JavaScript, a function is not a “magical language structure”, 
// but a special kind of value.

// The syntax that we used before is called a Function Declaration:

function sayHi() {
  alert("Hello");
}

// There is another syntax for creating a function 
// that is called a Function Expression.

// It looks like this:

let sayHi = function() {
  alert("Hello");
};

// Here, the function is created and assigned to the variable explicitly, 
// like any other value. No matter how the function is defined, 
// it’s just a value stored in the variable sayHi.

// The meaning of these code samples is the same: 
// "create a function and put it into the variable sayHi".

// We can even print out that value using alert:

function sayHi() {
  alert("Hello");
}

alert(sayHi); // shows the function code

// Please note that the last line does not run the function, 
// because there are no parentheses after sayHi. 
// There are programming languages where any mention of a function name 
// causes its execution, but JavaScript is not like that.

// In JavaScript, a function is a value, so we can deal with it as a value. 
// The code above shows its string representation, which is the source code.

// Surely, a function is a special value, 
// in the sense that we can call it like sayHi().

// But it’s still a value. 
// So we can work with it like with other kinds of values.

// We can copy a function to another variable:

function sayHi() {   // (1) create
  alert("Hello");
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

// Here’s what happens above in detail:

// The Function Declaration (1) creates the function and 
// puts it into the variable named sayHi.
// Line (2) copies it into the variable func. 
// Please note again: there are no parentheses after sayHi. 
// If there were, then func = sayHi() would write the result 
// of the call sayHi() into func, not the function sayHi itself.
// Now the function can be called as both sayHi() and func().
// Note that we could also have used a Function Expression 
// to declare sayHi, in the first line:

let sayHi = function() {
  alert("Hello");
};

let func = sayHi;
// ...

// Everything would work the same.

// Why is there a semicolon at the end?

// You might wonder, why does Function Expression have a semicolon ; 
// at the end, but Function Declaration does not:

function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};

// The answer is simple:

// There’s no need for ; at the end of code blocks and syntax structures 
// that use them like if { ... }, for { }, function f { } etc.

// A Function Expression is used inside the statement: let sayHi = ...;, 
// as a value. It’s not a code block, but rather an assignment. 
// The semicolon ; is recommended at the end of statements, 
// no matter what the value is. 
// So the semicolon here is not related to the Function Expression itself, 
// it just terminates the statement.

