// A function can return a value back into the calling code as the result.

// The simplest example would be a function that sums two values:

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result); // 3

// The directive return can be in any place of the function. 
// When the execution reaches it, the function stops, 
// and the value is returned to the calling code (assigned to result above).

// There may be many occurrences of return in a single function. For instance:

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
  alert('Access granted');
} else {
  alert('Access denied');
}

// It is possible to use return without a value. 
// That causes the function to exit immediately.

// For example:

function showMovie(age) {
  if (!checkAge(age)) return;

  alert("Showing you the movie"); // (*)
  // ...
}

// In the code above, if checkAge(age) returns false, 
// then showMovie won’t proceed to the alert.

// A function with an empty return or without it returns undefined
// If a function does not return a value, 
// it is the same as if it returns undefined:

function doNothing() { /* empty */ }

alert(doNothing() === undefined); // true

// An empty return is also the same as return undefined:

function doNothing() {
  return;
}

alert(doNothing() === undefined); // true

// Never add a newline between return and the value

// For a long expression in return, 
// it might be tempting to put it on a separate line, like this:

return
 (some + long + expression + or + whatever * f(a) + f(b))

// That doesn’t work, because JavaScript assumes a semicolon after return. 
// That’ll work the same as:

return;
 (some + long + expression + or + whatever * f(a) + f(b))

// So, it effectively becomes an empty return.

// If we want the returned expression to wrap across multiple lines, 
// we should start it at the same line as return. 
// Or at least put the opening parentheses there as follows:

return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
)

// And it will work just as we expect it to.