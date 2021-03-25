// Callback in callback

// How can we load two scripts sequentially: 
// the first one, and then the second one after it?

// The natural solution would be to put the second loadScript 
// call inside the callback, like this:

loadScript('/my/script.js', function(script) {

  alert(`Cool, the ${script.src} is loaded, let's load one more`);

  loadScript('/my/script2.js', function(script) {
    alert(`Cool, the second script is loaded`);
  });
});

// After the outer loadScript is complete, the callback initiates the inner one.

// What if we want one more script…?

loadScript('/my/script.js', function(script) {

  loadScript('/my/script2.js', function(script) {

    loadScript('/my/script3.js', function(script) {
      // ...continue after all scripts are loaded
    });

  });

});

// So, every new action is inside a callback. 
// That’s fine for few actions, but not good for many, 
// so we’ll see other variants soon.

