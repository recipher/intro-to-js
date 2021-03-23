// There’s a ladder object that allows to go up and down:

const Ladder = function(startstep) {
  this.step = startstep,
  this.up = function() {
    this.step++;
    return this;
  },
  this.down = function() {
    this.step--;
    return this;
  },
  this.showStep = function() { // shows the current step
    console.log(this.step);
    return this;
  }
};

//AC returning 'this' in each function makes them chainable

// Now, if we need to make several calls in sequence, can do it like this:

let ladder = new Ladder(0);

console.log("Starting step " + ladder.step);
ladder.up();
console.log("Ladder up " + ladder.step);
ladder.up();
console.log("Ladder up " + ladder.step);
ladder.down();
console.log("Ladder down " + ladder.step);
ladder.showStep(); // 1

ladder.step = 0;
// Modify the code of up, down and showStep to make the calls chainable, like this:
ladder.up().up().down().showStep().up().showStep();

ladder.up().up().down().showStep(); // 1




// Another solution - does the same
// There’s a ladder object that allows to go up and down:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // shows the current step
//     console.log(this.step);
//   }
// };

// //AC returning 'this' in each function makes them chainable

// // Now, if we need to make several calls in sequence, can do it like this:

// console.log("Starting step " + ladder.step);
// ladder.up();
// console.log("Ladder up " + ladder.step);
// ladder.up();
// console.log("Ladder up " + ladder.step);
// ladder.down();
// console.log("Ladder down " + ladder.step);
// ladder.showStep(); // 1

// ladder.step = 0;
// // Modify the code of up, down and showStep to make the calls chainable, like this:

// ladder.up().up().down().showStep(); // 1
