const name = 'Mosh'; // String literal

const another = new String(name); // String object

console.log(typeof name);
console.log(typeof another);

// Javascript automatically converts a string literal to a string object when dot notation is used
// to access a property or method of a string literal. This is called boxing.

let message = 'This is my first message';

// length of a string
console.log(message.length);
// convert to upper case
console.log(message.toUpperCase());
// convert to lower case
console.log(message.toLowerCase());
// find the index of a character
console.log(message.indexOf('my'));
// find the index of a character starting from the end of the string
console.log(message.lastIndexOf('my'));
// find the startwith a character
console.log(message.startsWith('This'));
// find the endwith a character
console.log(message.endsWith('e'));
// find the includes a character
console.log(message.includes('my'));

// split a string into an array
console.log(message.split(' '));


// escape notation
// \'
// \"
// \\
// \n
// \r
// \t
// \b
// \f
// \v
// \0
// \uXXXX
// \u{X}...{X}