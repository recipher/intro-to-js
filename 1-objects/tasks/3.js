// Create an object calculator with three methods:

// read() accepts two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

const Calculator = function(first, second) {
  this.a = first;
  this.b = second;

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
};

const calculator = new Calculator(10, 20);
console.log(calculator.sum());
console.log(calculator.mul());

