let numbers = [1,2,3,4];
let another = numbers;

numbers = [];
console.log(numbers); // []
console.log(another); // [1,2,3,4]
another.push(5);
console.log(numbers); // []
numbers.push(6);
console.log(another); // [1,2,3,4,5,6]
console.log(numbers); // [6]

// using length property
numbers.length = 0;
console.log(numbers); // []

// using splice method
another.splice(0,another.length);
console.log(another); // []