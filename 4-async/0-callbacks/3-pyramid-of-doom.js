// Pyramid of Doom

// From the first look, it’s a viable way of asynchronous coding. 
// And indeed it is. For one or maybe two nested calls it looks fine.

// But for multiple asynchronous actions that follow one after 
// another we’ll have code like this:

loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...continue after all scripts are loaded (*)
          }
        });

      }
    });
  }
});

// In the code above:

// We load 1.js, then if there’s no error.
// We load 2.js, then if there’s no error.
// We load 3.js, then if there’s no error – do something else (*).

// As calls become more nested, the code becomes deeper 
// and increasingly more difficult to manage, 
// especially if we have real code instead of ... 
// that may include more loops, conditional statements and so on.

// That’s sometimes called “callback hell” or “pyramid of doom.”


// The “pyramid” of nested calls grows to the right with every asynchronous action. 
// Soon it spirals out of control.

// So this way of coding isn’t very good.

// We can try to alleviate the problem by making every action a 
// standalone function, like this:

loadScript('1.js', step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('3.js', step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...continue after all scripts are loaded (*)
  }
}

// See? It does the same, and there’s no deep nesting now 
// because we made every action a separate top-level function.

// It works, but the code looks like a torn apart spreadsheet. 
// It’s difficult to read, and you probably noticed that one needs 
// to eye-jump between pieces while reading it. 
// That’s inconvenient, especially if the reader is not familiar 
// with the code and doesn’t know where to eye-jump.

// Also, the functions named step* are all of single use, 
// they are created only to avoid the “pyramid of doom.” 
// No one is going to reuse them outside of the action chain. 
// So there’s a bit of namespace cluttering here.

// We’d like to have something better.

// Luckily, there are other ways to avoid such pyramids. 
// One of the best ways is to use “promises,” described in the next chapter.