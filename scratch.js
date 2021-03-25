// const operateOnSum = function(x, y, operate) {
//   // x = number
//   // y = number
//   // z = function
//   const sum = x + y;

//   return operate(sum); // some value
// };

// const a = 10, b = 20, c = 30;

// const divideByTwo = i => i / 2;
// const multiplyByTen = i => i * 10;
// const powerOfTen = i => Math.pow(i, 10);
// const nonsense = i => 'nonsense';

// const first = operateOnSum(a, b, divideByTwo);
// const second = operateOnSum(a, c, multiplyByTen);
// const third = operateOnSum(a, c, powerOfTen);
// const fourth = operateOnSum(a, c, nonsense);

// console.log('first', first);
// console.log('second', second);
// console.log('third', third);
// console.log('fourth', fourth);


const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// const multiplyByTwo = number => number * 2;
// const powerOfTen = number => Math.pow(number, 10);

// const numbersMultipliedByTwo = numbers.map(multiplyByTwo);
// const numbersToPowerOfTen = numbers.map(powerOfTen);

// console.log(numbersMultipliedByTwo);
// console.log(numbersToPowerOfTen);

const isOdd = number => number % 2 !== 0;
const isEven = number => number % 2 === 0;
const greaterThanFive = number => number > 5;
const x = number => number * 2;

const firstOddNumber = numbers.find(isOdd);
const firstEvenNumber = numbers.find(isEven);
const firstNumberGreaterThanFive = numbers.find(greaterThanFive);

const allOddNumbers = numbers.filter(isOdd);
const allEvenNumbers = numbers.filter(isEven);
const allNumbersGreaterThanFive = numbers.filter(greaterThanFive);

console.log(numbers.filter(x));

// console.log(firstOddNumber);
// console.log(firstEvenNumber);
// console.log(allOddNumbers);
// console.log(allEvenNumbers);
// console.log(firstNumberGreaterThanFive);
// console.log(allNumbersGreaterThanFive);

