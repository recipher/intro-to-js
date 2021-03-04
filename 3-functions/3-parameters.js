// We can pass arbitrary data to functions using parameters 
// (also called function arguments) .

// In the example below, the function has two parameters: from and text.

function showMessage(from, text) { // arguments: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

// When the function is called in lines (*) and (**), 
// the given values are copied to local variables from and text. 
// Then the function uses them.

// Here’s one more example: 
// we have a variable from and pass it to the function. 
// Please note: the function changes from, 
// but the change is not seen outside, 
// because a function always gets a copy of the value:

function showMessage(from, text) {
  from = '*' + from + '*'; // make "from" look nicer

  alert(from + ': ' + text);
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert(from); // Ann