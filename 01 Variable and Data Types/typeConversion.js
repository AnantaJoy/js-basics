// Implicit type conversions
const f = 100;
// Show "Variable f contains the value 100"
console.log("Variable f contains the value " + f);

const number = "10" * 2;
console.log(number);
// number = "ten" * 2;
// console.log(number)


// Explicit type conversion
const h = "5";
console.log(h + 1); // Concatenation: show the string "51"
const i = Number("5");
console.log(i + 1); // Numerical addition: show the number 6

const string = 'string';
let boolString=Boolean(string); // true
console.log(boolString);

const n = 0;
let boolNumber=Boolean(n); // true
console.log(boolNumber);
