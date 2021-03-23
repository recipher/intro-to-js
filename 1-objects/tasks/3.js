// Create an object calculator with three methods:

// read() accepts two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

//First solution
// let calculator = {
//   a:0,
//   b:0,

//   read(number1, number2){
//     this.a = number1;
//     this.b = number2;
//     console.log("The numbers read in are " + this.a + " and " + this.b);
//   },

//   sum (){
//     return this.a + this.b;
//   },

//   mul (a, b){
//     return this.a * this.b;
//   },

// };

// calculator.read(5, 56);
// console.log("The sum of the numbers is " + calculator.sum());     //61
// console.log("The product of the numbers is "+ calculator.mul());  //280

// calculator.a = 25;
// console.log("The sum of the numbers is " + calculator.sum());     //81
// console.log("The product of the numbers is "+ calculator.mul());  //1400

const Calculator = function(first, second) {
  this.a = first;
  this.b = second;

  console.log("The numbers read in are " + this.a + " and " + this.b);

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };

};

const calculator = new Calculator (5, 56);
console.log("The sum of the numbers is " + calculator.sum());     //61
console.log("The product of the numbers is "+ calculator.mul());  //280

calculator.a = 25;
console.log("The new value of the number is " + calculator.a + " and " + calculator.b);
console.log("The sum of the numbers is " + calculator.sum());     //81
console.log("The product of the numbers is "+ calculator.mul());  //1400
