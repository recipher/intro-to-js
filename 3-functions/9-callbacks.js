// Let’s look at more examples of passing functions as values 
// and using function expressions.

// We’ll write a function ask(question, yes, no) with three parameters:

// question
// Text of the question

// yes
// Function to run if the answer is “Yes”

// no
// Function to run if the answer is “No”

// The function should ask the question and, depending on the user’s answer, 
// call yes() or no():

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

// In practice, such functions are quite useful. 
// The major difference between a real-life ask and the example 
// above is that real-life functions use more complex ways 
// to interact with the user than a simple confirm. 
// In the browser, such function usually draws a nice-looking question window. 
// But that’s another story.

// The arguments showOk and showCancel of ask are called 
// callback functions or just callbacks.

// The idea is that we pass a function and expect it to be “called back” 
// later if necessary. In our case, showOk becomes the callback for “yes” answer, 
// and showCancel for “no” answer.

// We can use Function Expressions to write the same function much shorter:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

// Here, functions are declared right inside the ask(...) call. 
// They have no name, and so are called anonymous. 
// Such functions are not accessible outside of ask 
// (because they are not assigned to variables), but that’s just what we want here.

// Such code appears in our scripts very naturally, 
// it’s in the spirit of JavaScript.

// A function is a value representing an “action”
// Regular values like strings or numbers represent the data.

// A function can be perceived as an action.

// We can pass it between variables and run when we want.
