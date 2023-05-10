// Logical AND(&&) operator
// The logical AND(&&) operator returns true if both operands are true, otherwise, it returns false.

// The following truth table shows the result of the logical AND(&&) operator:
// A	B	A && B
// true	true	true
// true	false	false
// false	true	false
// false	false	false
// The following example uses the logical AND(&&) operator to check if a number is between 0 and 100:
let number = 50;
let result = number >= 0 && number <= 100;
console.log(result);


// Logical OR(||) operator
// The logical OR(||) operator returns true if one of the operands is true, otherwise, it returns false.

// The following truth table shows the result of the logical OR(||) operator:
// A	B	A || B
// true	true	true
// true	false	true
// false	true	true
// false	false	false
// The following example uses the logical OR(||) operator to check if a number is either 0 or 100:
let age = 15;
let passport = false;
let validity = age >= 18 || passport;
console.log("You're valid to create a account: " + validity);

