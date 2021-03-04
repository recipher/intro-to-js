// If a parameter is not provided, then its value becomes undefined.

// For instance, the aforementioned 
function showMessage(from, text) 
// can be called with a single argument:

showMessage("Ann");

// That’s not an error. Such a call would output "*Ann*: undefined". 
// There’s no text, so it’s assumed that text === undefined.

// If we want to use a “default” text in this case, 
// then we can specify it after =:

function showMessage(from, text = "no text given") {
  alert(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given

// Now if the text parameter is not passed, it will get the value "no text given"

// Here "no text given" is a string, but it can be a more complex expression, 
// which is only evaluated and assigned if the parameter is missing. 
// So, this is also possible:

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

// Alternative default parameters

// Sometimes it makes sense to set default values for parameters 
// not in the function declaration, but at a later stage, during its execution.

// To check for an omitted parameter, we can compare it with undefined:

function showMessage(text) {
  if (text === undefined) text = 'empty message';

  alert(text);
}

showMessage(); // empty message

// …Or we could use the || operator:

// if text parameter is omitted or "" is passed, set it to 'empty'
function showMessage(text) {
  text = text || 'empty';
  // ...
}

// Modern JavaScript engines support the nullish coalescing operator ??, 
// it’s better when falsy values, such as 0, are considered regular:

 // if there's no "count" parameter, show "unknown"
function showCount(count) {
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown