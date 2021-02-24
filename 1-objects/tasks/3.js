// Create an object calculator with three methods:

// read() accepts two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
  // ... your code ...
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    return (this.a + this.b)
  },

  mul() {
    return (this.a * this.b)
  }

};

calculator.read(10, 20);
console.log(calculator.sum());
console.log(calculator.mul());