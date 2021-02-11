n real code we often use existing variables as values for property names.

For instance:

 function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
console.log(user.name); // John
In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.

Instead of name:name we can just write name, like this:

function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}
We can use both normal properties and shorthands in the same object:

let user = {
  name,  // same as name:name
  age: 30
};