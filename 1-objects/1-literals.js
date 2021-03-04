// We can immediately put some properties into {...} as “key: value” pairs:

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

// A property has a key (also known as “name” or “identifier”) 
// before the colon ":" and a value to the right of it.

// In the user object, there are two properties:

// The first property has the name "name" and the value "John".
// The second one has the name "age" and the value 30.
// The resulting user object can be imagined as a cabinet with two signed files labeled “name” and “age”.


// We can add, remove and read properties from it any time.

// Property values are accessible using the dot notation:

// get property values of the object:
console.log(user.name); // John
console.log(user.age); // 30

// The value can be of any type. Let’s add a boolean one:

user.isAdmin = true;

// To remove a property, we can use delete operator:

delete user.age;

// We can also use multiword property names, but then they must be quoted:

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

// The last property in the list may end with a comma:

let user = {
  name: "John",
  age: 30,
}

// That is called a “trailing” or “hanging” comma. 
// Makes it easier to add/remove/move around properties, because all lines become alike.