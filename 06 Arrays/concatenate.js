const first = [1, 2, 3];
const second = [4, 5, 6];

// concat method
const combined = first.concat(second);
console.log(combined); // [1,2,3,4,5,6]


// concatening more than two arrays using spread operator
const combined2 = [...first, 'a', ...second, 'b'];
console.log(combined2); // [1,2,3,'a',4,5,6,'b']