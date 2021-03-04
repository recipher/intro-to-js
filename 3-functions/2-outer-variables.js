// A function can access an outer variable as well, for example:

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John

// The function has full access to the outer variable. 
// It can modify it as well.

// For instance:

let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert(userName); // John before the function call

showMessage();

alert(userName); // Bob, the value was modified by the function

// The outer variable is only used if there’s no local one.

// If a same-named variable is declared inside the function then 
// it shadows the outer one. 
// For instance, in the code below the function uses the local userName. 
// The outer one is ignored:

let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert(userName); // John, unchanged, the function did not access the outer variable

// Global variables

// Variables declared outside of any function, 
// such as the outer userName in the code above, are called global.

// Global variables are visible from any function (unless shadowed by locals).

// It’s a good practice to minimize the use of global variables. 
// Modern code has few or no globals. 
// Most variables reside in their functions. 
// Sometimes though, they can be useful to store project-level data.