const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23];


// 1. push() - adds an element to the end of an array
primeNumbers.push(29);
console.log(primeNumbers); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

//2. unshift() - adds an element to the beginning of an array
primeNumbers.unshift(1);
console.log(primeNumbers); // [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

//3. pop() - removes the last element of an array
primeNumbers.pop();
console.log(primeNumbers); // [1, 2, 3, 5, 7, 11, 13, 17, 19, 23]

//4. shift() - removes the first element of an array
primeNumbers.shift();
console.log(primeNumbers); // [2, 3, 5, 7, 11, 13, 17, 19, 23]

//5. indexOf() - returns the index of the first occurrence of a given element
console.log(primeNumbers.indexOf(11)); // 4 

//6. splice() - removes elements from an array and (optionally) replaces them
primeNumbers.splice(4, 0,'replaced');
console.log(primeNumbers); // [2, 3, 5, 7, 13, 17, 19, 23]



