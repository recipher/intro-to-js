// One of the fundamental differences of objects versus primitives 
// is that objects are stored and copied “by reference”, 
// whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

// That’s easy to understand if we look a bit under the hood of what happens when we copy a value.

// Let’s start with a primitive, such as a string.

// Here we put a copy of message into phrase:

let message = "Hello!";
let phrase = message;

// As a result we have two independent variables, each one storing the string "Hello!".

// Quite an obvious result, right?

// Objects are not like that.

// A variable assigned to an object stores not the object itself, 
// but its “address in memory” – in other words “a reference” to it.

// Let’s look at an example of such a variable:

let user = {
  name: "John"
};


// The object is stored somewhere in memory, while the user variable has a “reference” to it.

// We may think of an object variable, such as user, 
// as like a sheet of paper with the address of the object on it.

// When we perform actions with the object, e.g. take a property user.name, 
// the JavaScript engine looks at what’s at that address and performs the operation on the actual object.

// Now here’s why it’s important.

// When an object variable is copied, the reference is copied, but the object itself is not duplicated.

// For instance:

let user = { name: "John" };

let admin = user; // copy the reference

// Now we have two variables, each storing a reference to the same object.

// As you can see, there’s still one object, but now with two variables that reference it.

// We can use either variable to access the object and modify its contents:

 let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

console.log(user.name); // 'Pete', changes are seen from the "user" reference

// It’s as if we had a cabinet with two keys and used one of them (admin) to get into it and make changes. 
// Then, if we later use another key (user), 
// we are still opening the same cabinet and can access the changed contents.

// Comparison by reference

// Two objects are equal only if they are the same object.

// For instance, here a and b reference the same object, thus they are equal:

let a = {};
let b = a; // copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

// And here two independent objects are not equal, even though they look alike (both are empty):

let a = {};
let b = {}; // two independent objects

console.log(a == b); // false

// For comparisons like obj1 > obj2 or for a comparison against a primitive obj == 5, 
// objects are converted to primitives. 
// We’ll study how object conversions work very soon, but to tell the truth, 
// such comparisons are needed very rarely – usually they appear as a result of a programming mistake.

// Cloning and merging, Object.assign

// So, copying an object variable creates one more reference to the same object.

// But what if we need to duplicate an object? Create an independent copy, a clone?

// That’s also doable, but a little bit more difficult, 
// because there’s no built-in method for that in JavaScript. 
// But there is rarely a need – copying by reference is good most of the time.

// But if we really want that, then we need to create a new object and 
// replicate the structure of the existing one by iterating over its properties and 
// copying them on the primitive level.

// Like this:

 let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

console.log(user.name); // still John in the original object

// Also we can use the method Object.assign for that.

// The syntax is:

// Object.assign(dest, [src1, src2, src3...])

// The first argument dest is a target object.
// Further arguments src1, ..., srcN (can be as many as needed) are source objects.

// It copies the properties of all source objects src1, ..., srcN into the target dest. 
// In other words, properties of all arguments starting from the second are copied into the first object.

// The call returns dest.
// For instance, we can use it to merge several objects into one:

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
// If the copied property name already exists, it gets overwritten:

let user = { name: "John" };

Object.assign(user, { name: "Pete" });

console.log(user.name); // now user = { name: "Pete" }

// We also can use Object.assign to replace for..in loop for simple cloning:

let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);

// It copies all properties of user into the empty object and returns it.

// There are also other methods of cloning an object, 
// e.g. using the spread operator clone = {...user}, covered later in the tutorial.

// Nested cloning

// Until now we assumed that all properties of user are primitive. 
// But properties can be references to other objects. What to do with them?

// Like this:

 let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

console.log(user.sizes.height); // 182

// Now it’s not enough to copy clone.sizes = user.sizes, because the user.sizes is an object, 
// it will be copied by reference. So clone and user will share the same sizes:

// Like this:

 let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

console.log(user.sizes === clone.sizes); // true, same object

// user and clone share sizes
user.sizes.width++;       // change a property from one place
console.log(clone.sizes.width); // 51, see the result from the other one

// To fix that, we should use a cloning loop that examines each value of user[key] and, 
// if it’s an object, then replicate its structure as well. That is called a “deep cloning”.

// We can use recursion to implement it. 
// Or, to not reinvent the wheel, take an existing implementation, 
// for instance _.cloneDeep(obj) from the JavaScript library lodash.

// Const objects can be modified

// An important side effect of storing objects as references is that an object declared as const can be modified.

// For instance:

const user = {
  name: "John"
};

user.name = "Pete"; // (*)

console.log(user.name); // Pete

// It might seem that the line (*) would cause an error, but it does not. 
// The value of user is constant, it must always reference the same object, 
// but properties of that object are free to change.

// In other words, the const user gives an error only if we try to set user=... as a whole.

// That said, if we really need to make constant object properties, 
// it’s also possible, but using totally different methods. 
// We’ll mention that in the chapter Property flags and descriptors.