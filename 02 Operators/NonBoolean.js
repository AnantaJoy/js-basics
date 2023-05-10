// Falsy in javascript
// undefined
// null
// 0
// false
// ''
// NaN
// Anything that is not Falsy -> Truthy

// Short-circuiting
// false || 1 || 2 -> 1 
// false || 'Mosh' || 2 -> 'Mosh'   


let pizzaSize = 'medium';
let addOn = undefined;
let Order = pizzaSize || addOn;
console.log(Order);
