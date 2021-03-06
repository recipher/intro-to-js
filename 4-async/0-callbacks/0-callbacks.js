// Many functions are provided by JavaScript host environments 
// that allow you to schedule asynchronous actions. 
// In other words, actions that we initiate now, but they finish later.

// For instance, one such function is the setTimeout function.

// There are other real-world examples of asynchronous actions, 
// e.g. loading scripts and modules.

// Take a look at the function loadScript(src), 
// that loads a script with the given src:

function loadScript(src) {
  // creates a <script> tag and append it to the page
  // this causes the script with given src to start loading and run when complete
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}

// It appends to the document the new, dynamically created, 
// tag <script src="…"> with given src. 
// The browser automatically starts loading it and executes when complete.

// We can use this function like this:

// load and execute the script at the given path
loadScript('/my/script.js');

// The script is executed “asynchronously”, as it starts loading now, 
// but runs later, when the function has already finished.

// If there’s any code below loadScript(…), 
// it doesn’t wait until the script loading finishes.

loadScript('/my/script.js');
// the code below loadScript
// doesn't wait for the script loading to finish
// ...

// Let’s say we need to use the new script as soon as it loads. 
// It declares new functions, and we want to run them.

// But if we do that immediately after the loadScript(…) call, that wouldn’t work:

loadScript('/my/script.js'); // the script has "function newFunction() {…}"

newFunction(); // no such function!

// Naturally, the browser probably didn’t have time to load the script. 
// As of now, the loadScript function doesn’t provide a way to 
// track the load completion. The script loads and eventually runs, that’s all. 
// But we’d like to know when it happens, to use new functions and variables 
// from that script.

// Let’s add a callback function as a second argument to loadScript 
// that should execute when the script loads:

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}

// Now if we want to call new functions from the script, 
// we should write that in the callback:

loadScript('/my/script.js', function() {
  // the callback runs after the script is loaded
  newFunction(); // so now it works
  // ...
});

// That’s the idea: the second argument is a function (usually anonymous) 
// that runs when the action is completed.

// Here’s a runnable example with a real script:

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the script ${script.src} is loaded`);
  alert(_); // function declared in the loaded script
});

// That’s called a “callback-based” style of asynchronous programming. 
// A function that does something asynchronously should provide a 
// callback argument where we put the function to run after it’s complete.

// Here we did it in loadScript, but of course it’s a general approach.

