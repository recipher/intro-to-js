// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

// The array in the process:
const styles = [ 'Jazz', 'Blues' ];
console.log(styles);
styles.push('Rock-n-Roll');
console.log(styles);
styles[Math.floor(styles.length / 2)] = 'Classics';
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift('Rap', 'Reggae');
console.log(styles);

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);

let numStyles = styles.length;
let midPoint = Math.floor(numStyles / 2);

styles.splice(midPoint, 1, "Classics");
console.log(styles);
console.log(styles.shift());
styles.splice(0,0,"Rap", "Reggae");
console.log(styles);


