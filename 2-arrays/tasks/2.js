// Write the function sumInput() that:

// Calculates and returns the sum of array items
// Ignores non-numeric values

const sumInput = function(array) {
  const sum = array.map(function(accumulator, value) {
    if (value !== '' && value !== null && isFinite(value)) {
      return accumulator + value;
    }

    return accumulator;
  }, 0);

  return sum;
};

console.log(sumInput([1, 2, 'weird', 3, 4, 5]));