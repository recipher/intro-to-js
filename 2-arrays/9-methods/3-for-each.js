// The arr.forEach method allows to run a function for every element of the array.

// The syntax:

arr.forEach(function(item, index, array) {
  // ... do something with item
});

// For instance, this shows each element of the array:

 // for each element call console.log
["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);

// And this code is more elaborate about their positions in the target array:

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

// The result of the function (if it returns any) is thrown away and ignored.