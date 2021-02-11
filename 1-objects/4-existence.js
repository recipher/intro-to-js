// A notable feature of objects in JavaScript, compared to many other languages, 
// is that it’s possible to access any property. 
// There will be no error if the property doesn’t exist!

// Reading a non-existing property just returns undefined. 
// So we can easily test whether the property exists:

 let user = {};

console.log(user.noSuchProperty === undefined); // true means "no such property"

// There’s also a special operator "in" for that.

// The syntax is:

// "key" in object
// For instance:

let user = { name: "John", age: 30 };

console.log("age" in user); // true, user.age exists
console.log("blabla" in user); // false, user.blabla doesn't exist

// Please note that on the left side of in there must be a property name. That’s usually a quoted string.

// If we omit quotes, that means a variable, it should contain the actual name to be tested. For instance:

let user = { age: 30 };

let key = "age";
console.log(key in user); // true, property "age" exists

// Why does the in operator exist? Isn’t it enough to compare against undefined?

// Well, most of the time the comparison with undefined works fine. 
// But there’s a special case when it fails, but "in" works correctly.

// It’s when an object property exists, but stores undefined:

 let obj = {
  test: undefined
};

console.log(obj.test); // it's undefined, so - no such property?

console.log("test" in obj); // true, the property does exist!

// In the code above, the property obj.test technically exists. So the in operator works right.

// Situations like this happen very rarely, because undefined should not be explicitly assigned. 
// We mostly use null for “unknown” or “empty” values. 
// So the in operator is an exotic guest in the code.