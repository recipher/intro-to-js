// Handling errors

// In the above examples we didn’t consider errors. 
// What if the script loading fails? 
// Our callback should be able to react on that.

// Here’s an improved version of loadScript that tracks loading errors:

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// It calls callback(null, script) for successful load 
// and callback(error) otherwise.

// The usage:

loadScript('/my/script.js', function(error, script) {
  if (error) {
    // handle error
  } else {
    // script loaded successfully
  }
});

// Once again, the recipe that we used for loadScript is actually quite common. 
// It’s called the “error-first callback” style.

// The convention is:

// The first argument of the callback is reserved for an error if it occurs. 
// Then callback(err) is called.
// The second argument (and the next ones if needed) are for the successful result. 
// Then callback(null, result1, result2…) is called.
// So the single callback function is used both for reporting errors and 
// passing back results.

