// Functions are actions. So their name is usually a verb. 
// It should be brief, as accurate as possible and describe what the function does, 
// so that someone reading the code gets an indication of what the function does.

// It is a widespread practice to start a function with a 
// verbal prefix which vaguely describes the action. 
// There must be an agreement within the team on the meaning of the prefixes.

// For instance, functions that start with "show" usually show something.

// Function starting with…

// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.

// Examples of such names:

showMessage(/* ... */)     // shows a message
getAge(/* ... */)          // returns the age (gets it somehow)
calcSum(/* ... */)         // calculates a sum and returns the result
createForm(/* ... */)      // creates a form (and usually returns it)
checkPermission(/* ... */) // checks a permission, returns true/false

// With prefixes in place, a glance at a function name 
// gives an understanding what kind of work it does 
// and what kind of value it returns.

// One function – one action

// A function should do exactly what is suggested by its name, no more.

// Two independent actions usually deserve two functions, 
// even if they are usually called together 
// (in that case we can make a 3rd function that calls those two).

// A few examples of breaking this rule:

// getAge – would be bad if it shows an alert with the age (should only get).

// createForm – would be bad if it modifies the document, 
//   adding a form to it (should only create it and return).

// checkPermission – would be bad if it displays the 
//   access granted/denied message 
//   (should only perform the check and return the result).

// These examples assume common meanings of prefixes. 
// You and your team are free to agree on other meanings, 
// but usually they’re not much different. 
// In any case, you should have a firm understanding of what a prefix means, 
// what a prefixed function can and cannot do. 
// All same-prefixed functions should obey the rules. 
// And the team should share the knowledge.

// Ultrashort function names

// Functions that are used very often sometimes have ultrashort names.

// For example, the jQuery framework defines a function with $. 
// The Lodash library has its core function named _.

// These are exceptions. 
// Generally functions names should be concise and descriptive.

