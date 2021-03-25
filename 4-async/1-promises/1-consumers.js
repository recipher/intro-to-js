// Consumers: then, catch, finally

// A Promise object serves as a link between the executor 
// (the “producing code” or “singer”) and the consuming functions 
// (the “fans”), which will receive the result or error. 
// Consuming functions can be registered (subscribed) using 
// methods .then, .catch and .finally.

// then

// The most important, fundamental one is .then.

// The syntax is:

promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);

// The first argument of .then is a function that runs when 
// the promise is resolved, and receives the result.

// The second argument of .then is a function that runs when 
// the promise is rejected, and receives the error.

// For instance, here’s a reaction to a successfully resolved promise:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);

// The first function was executed.

// And in the case of a rejection, the second one:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);

// If we’re interested only in successful completions, 
// then we can provide only one function argument to .then:

let promise = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(alert); // shows "done!" after 1 second

// catch

// If we’re interested only in errors, then we can use null as the first argument: 
// .then(null, errorHandlingFunction). 
// Or we can use .catch(errorHandlingFunction), 
// which is exactly the same:

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second

// The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand.

// finally

// Just like there’s a finally clause in a regular try {...} catch {...}, 
// there’s finally in promises.

// The call .finally(f) is similar to .then(f, f) in the sense 
// that f always runs when the promise is settled: be it resolve or reject.

// finally is a good handler for performing cleanup, 
// e.g. stopping our loading indicators, as they are not needed anymore, 
// no matter what the outcome is.

// Like this:

new Promise((resolve, reject) => {
  /* do something that takes time, and then call resolve/reject */
})
  // runs when the promise is settled, doesn't matter successfully or not
  .finally(() => {/* stop loading indicator */})
  // so the loading indicator is always stopped before we process the result/error
  .then(result => {/* show result */}, err => {/* show error */})

// That said, finally(f) isn’t exactly an alias of then(f,f) though. 
// There are few subtle differences:

// A finally handler has no arguments. 
// In finally we don’t know whether the promise is successful or not. 
// That’s all right, as our task is usually to perform “general” finalizing procedures.

// A finally handler passes through results and errors to the next handler.

// For instance, here the result is passed through finally to then:

new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 2000)
})
  .finally(() => alert("Promise ready"))
  .then(result => alert(result)); // <-- .then handles the result

// And here there’s an error in the promise, passed through finally to catch:

new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => alert("Promise ready"))
  .catch(err => alert(err));  // <-- .catch handles the error object

// That’s very convenient, because finally is not meant to process a promise result. 
// So it passes it through.

// We’ll talk more about promise chaining and result-passing between 
// handlers in the next section.

// We can attach handlers to settled promises
// If a promise is pending, .then/catch/finally handlers wait for it. 
// Otherwise, if a promise has already settled, they just run:

 // the promise becomes resolved immediately upon creation
let promise = new Promise(resolve => resolve("done!"));

promise.then(alert); // done! (shows up right now)

// Note that this makes promises more powerful than the 
// real life “subscription list” scenario. 
// If the singer has already released their song and then a 
// person signs up on the subscription list, 
// they probably won’t receive that song. 
// Subscriptions in real life must be done prior to the event.

// Promises are more flexible. 
// We can add handlers any time: if the result is already there, they just execute.

// Next, let’s see more practical examples of how promises 
// can help us write asynchronous code.

// Example: loadScript

// We’ve got the loadScript function for loading a script from the previous chapter.

// Here’s the callback-based variant, just to remind us of it:

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// Let’s rewrite it using Promises.

// The new function loadScript will not require a callback. 
// Instead, it will create and return a Promise object that 
// resolves when the loading is complete. 
// The outer code can add handlers (subscribing functions) to it using .then:

 function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}

// Usage:

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('Another handler...'));

// We can immediately see a few benefits over the callback-based pattern:

// Promises

// Promises allow us to do things in the natural order. 
// First, we run loadScript(script), and .then we write what to do with the result.	

// We can call .then on a Promise as many times as we want. 
// Each time, we’re adding a new “fan”, a new subscribing function, 
// to the “subscription list”. 

// So promises give us better code flow and flexibility. 

// Callbacks

// We must have a callback function at our disposal when calling loadScript(script, callback). In other words, we must know what to do with the result before loadScript is called.

// There can be only one callback.