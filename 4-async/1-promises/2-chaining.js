// Promises chaining

// Let’s return to the problem mentioned in the section 
// Introduction: callbacks: 
// we have a sequence of asynchronous tasks to be performed one after another — 
// for instance, loading scripts. How can we code it well?

// Promises provide a couple of recipes to do that.

// In this chapter we cover promise chaining.

// It looks like this:

new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
}).then(function(result) { // (**)
  alert(result); // 1
  return result * 2;
}).then(function(result) { // (***)
  alert(result); // 2
  return result * 2;
}).then(function(result) {
  alert(result); // 4
  return result * 2;
});

// The idea is that the result is passed through the chain of .then handlers.

// Here the flow is:

// The initial promise resolves in 1 second (*),
// Then the .then handler is called (**).
// The value that it returns is passed to the next .then handler (***)
// …and so on.
// As the result is passed along the chain of handlers, 
// we can see a sequence of alert calls: 1 → 2 → 4.


// The whole thing works, because a call to promise.then 
// returns a promise, so that we can call the next .then on it.

// When a handler returns a value, it becomes the result of that promise, 
// so the next .then is called with it.

// A classic newbie error: technically we can also add many 
// .then to a single promise. This is not chaining.

// For example:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

// What we did here is just several handlers to one promise. 
// They don’t pass the result to each other; instead they process it independently.

// All .then on the same promise get the same result – the result of that promise. 
// So in the code above all alert show the same: 1.

// In practice we rarely need multiple handlers for one promise. 
// Chaining is used much more often.