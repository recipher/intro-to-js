// To walk over all keys of an object, there exists a special form of the loop: for..in. 
// This is a completely different thing from the for(;;) construct that we studied before.

// The syntax:

for (key in object) {
  // executes the body for each key among object properties
}

// For instance, let’s output all properties of user:

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  console.log(key);  // name, age, isAdmin
  // values for the keys
  console.log(user[key]); // John, 30, true
}

// Note that all “for” constructs allow us to declare the looping variable inside the loop, like let key here.

// Also, we could use another variable name here instead of key. 
// For instance, "for (let prop in obj)" is also widely used.

// Ordered like an object

// Are objects ordered? 
// In other words, if we loop over an object, do we get all properties in the same order they were added? 

// Can we rely on this?

// The short answer is: “ordered in a special fashion”: 
// integer properties are sorted, others appear in creation order. The details follow.

// As an example, let’s consider an object with the phone codes:

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

// The object may be used to suggest a list of options to the user. 
// If we’re making a site mainly for German audience then we probably want 49 to be the first.

// But if we run the code, we see a totally different picture:

// USA (1) goes first
// then Switzerland (41) and so on.
// The phone codes go in the ascending sorted order, because they are integers. So we see 1, 41, 44, 49.