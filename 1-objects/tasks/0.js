// Write the code, one line for each action:

// Create an empty object user.

let user = {};

// Add the property name with the value John.

user.name = 'John';

// Add the property surname with the value Smith.
user['name'] = 'Smith';

// Change the value of the name to Pete.
// Remove the property name from the object.

const user = {
    name : "John",
    surname : "Smith",
}

console.log(user);

user.name = "Pete";

console.log(user);

delete user.name;

console.log(user);
