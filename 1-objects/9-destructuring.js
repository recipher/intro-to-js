// The basic syntax is:

// let {var1, var2} = {var1:…, var2:…}

// We should have an existing object at the right side, that we want to split into variables. 
// The left side contains an object-like “pattern” for corresponding properties. 
// In the simplest case, that’s a list of variable names in {...}.

// For instance:

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

// Properties options.title, options.width and options.height are assigned to the corresponding variables.

// The order does not matter. This works too:

// changed the order in let {...}
let {height, width, title} = { title: "Menu", height: 200, width: 100 }

// The pattern on the left side may be more complex and specify the mapping between properties and variables.

// If we want to assign a property to a variable with another name, for instance, 
// make options.width go into the variable named w, then we can set the variable name using a colon:

 let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

console.log(title);  // Menu
console.log(w);      // 100
console.log(h);      // 200

// The colon shows “what : goes where”. 
// In the example above the property width goes to w, property height goes to h, 
// and title is assigned to the same name.

// For potentially missing properties we can set default values using "=", like this:

 let options = {
  title: "Menu"
};

let {width = 100, height = 200, title} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

// Just like with arrays or function parameters, default values can be any expressions or even function calls. 
// They will be evaluated if the value is not provided.

// In the code below prompt asks for width, but not for title:

let options = {
  title: "Menu"
};

let {width = prompt("width?"), title = prompt("title?")} = options;

console.log(title);  // Menu
console.log(width);  // (whatever the result of prompt is)

// We also can combine both the colon and equality:

 let options = {
  title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;

console.log(title);  // Menu
console.log(w);      // 100
console.log(h);      // 200

// If we have a complex object with many properties, we can extract only what we need:

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// only extract title as a variable
let { title } = options;

console.log(title); // Menu

// The rest pattern “…”

// What if the object has more properties than we have variables? 
// Can we take some and then assign the “rest” somewhere?

// We can use the rest pattern, just like we did with arrays. 
// It’s not supported by some older browsers (IE, use Babel to polyfill it), but works in modern ones.

// It looks like this:

let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = property named title
// rest = object with the rest of properties
let {title, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest.height);  // 200
console.log(rest.width);   // 100

// Gotcha if there’s no let
// In the examples above variables were declared right in the assignment: 
// let {…} = {…}. Of course, we could use existing variables too, without let. But there’s a catch.

// This won’t work:

let title, width, height;

// error in this line
{title, width, height} = {title: "Menu", width: 200, height: 100};

// The problem is that JavaScript treats {...} in the main code flow 
// (not inside another expression) as a code block. 
// Such code blocks can be used to group statements, like this:

{
  // a code block
  let message = "Hello";
  // ...
  console.log( message );
}

// So here JavaScript assumes that we have a code block, that’s why there’s an error. 
// We want destructuring instead.

// To show JavaScript that it’s not a code block, we can wrap the expression in parentheses (...):

let title, width, height;

// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100});

console.log(title); // Menu

// Nested destructuring

// If an object or an array contain other nested objects and arrays, 
// we can use more complex left-side patterns to extract deeper portions.

// In the code below options has another object in the property size and an array in the property items. 
// The pattern at the left side of the assignment has the same structure to extract values from them:

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut

