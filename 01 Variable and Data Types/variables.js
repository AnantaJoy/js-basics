/*
Variable is a container to store data.
Variable naming convention in javascript:
1. Variable name can contain letters, digits, underscore and dollar sign.
2. Variable name can not start with a digit.
3. Variable name can start with an underscore or dollar sign.
4. Variable name can not be a reserved keyword.
5. Variable name are case sensitive.
6. Variable name should be meaningful.
*/

// primitive data types in javascript
// 1. string
// 2. number
// 3. boolean
// 4. undefined
// 5. null



// declare a variable
let myName;
console.log(myName);
console.log(typeof myName);

// string type
let myname = "Joy";
console.log(myname);
console.log(typeof myname);

// number type
let age = 34;
console.log(age)
console.log(typeof age);

// floating type
let weight = 65.5;
console.log(weight);
console.log(typeof weight);

// boolean type
let booleanValue = true;
console.log(booleanValue);
console.log(typeof booleanValue);

// constant type
const PIValue = 3.1416;
console.log(PIValue);
console.log(typeof PIValue);

// changing variable value produce error
// PIValue = 4.66;

// undefined type
let myVar;
console.log(myVar);
console.log(typeof myVar);

// null type
let myVar2 = null;
console.log(myVar2);
console.log(typeof myVar2);

