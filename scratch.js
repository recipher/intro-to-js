function something(arr) {
  if (!Array.isArray(arr)) arr = [ arr ];
  return arr.map(item => item * 10);
};

console.log(something(1));
console.log(something([1]));
