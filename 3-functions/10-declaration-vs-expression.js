// Let’s formulate the key differences between 
// Function Declarations and Expressions.

// First, the syntax: how to differentiate between them in the code.

// Function Declaration: a function, declared as a separate statement, 
// in the main code flow.

// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression: a function, created inside an expression 
// or inside another syntax construct. 
// Here, the function is created at the right side of the
//  “assignment expression” =:

// Function Expression
let sum = function(a, b) {
  return a + b;
};

// The more subtle difference is when a function is created by the JavaScript engine.

// A Function Expression is created when the execution reaches it 
// and is usable only from that moment.

// Once the execution flow passes to the right side of the assignment 
// let sum = function… – here we go, the function is created 
// and can be used (assigned, called, etc.) from now on.

// Function Declarations are different.

// A Function Declaration can be called earlier than it is defined.

// For example, a global Function Declaration is visible in the whole script, 
// no matter where it is.

// That’s due to internal algorithms. 
// When JavaScript prepares to run the script, 
// it first looks for global Function Declarations in it and creates the functions. 
// We can think of it as an “initialization stage”.

// And after all Function Declarations are processed, the code is executed. 
// So it has access to these functions.

// For example, this works:

sayHi("John"); // Hello, John

function sayHi(name) {
  alert(`Hello, ${name}`);
}

// The Function Declaration sayHi is created when JavaScript 
// is preparing to start the script and is visible everywhere in it.

// …If it were a Function Expression, then it wouldn’t work:

sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert(`Hello, ${name}`);
};

// Function Expressions are created when the execution reaches them. 
// That would happen only in the line (*). Too late.

// Another special feature of Function Declarations is their block scope.

// In strict mode, when a Function Declaration is within a code block, 
// it’s visible everywhere inside that block. But not outside of it.

// For instance, let’s imagine that we need to declare a function welcome() 
// depending on the age variable that we get during runtime. 
// And then we plan to use it some time later.

// If we use Function Declaration, it won’t work as intended:

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {
  function welcome() {
    alert("Hello!");
  }
} else {
  function welcome() {
    alert("Greetings!");
  }
}

// ...use it later
welcome(); // Error: welcome is not defined

// That’s because a Function Declaration is only visible 
// inside the code block in which it resides.

// Here’s another example:

let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)
} else {
  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined

// What can we do to make welcome visible outside of if?

// The correct approach would be to use a Function Expression 
// and assign welcome to the variable that is declared outside 
// of if and has the proper visibility.

// This code works as intended:

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {
  welcome = function() {
    alert("Hello!");
  };
} else {
  welcome = function() {
    alert("Greetings!");
  };
}

welcome(); // ok now

// Or we could simplify it even further using a question mark operator ?:

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now

// When to choose Function Declaration versus Function Expression?

// As a rule of thumb, when we need to declare a function, 
// the first to consider is Function Declaration syntax. 
// It gives more freedom in how to organize our code, 
// because we can call such functions before they are declared.

// That’s also better for readability, 
// as it’s easier to look up function f(…) {…} in the code 
// than let f = function(…) {…};. 

// Function Declarations are more “eye-catching”.

// …But if a Function Declaration does not suit us for some reason, 
// or we need a conditional declaration (we’ve just seen an example), 
// then Function Expression should be used.

