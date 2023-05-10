/*
Reference Type Variable:
1. Object
2. Array
3. Function
*/
// Object in javascript

// let name = "Joy";
// let age = 24;
// let weight = 65.5;

let person = {
    name: "Joy",
    age: 24,
    weight: 65.5
}
console.log(person);
console.log(typeof person);

// Dot notation
console.log(person.name);
person.name = "Johnydip";
console.log(person.name);


// Bracket notation
console.log(person['age']);
person['age'] = 25;
console.log(person['age']);