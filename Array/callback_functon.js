function addTwoNumbers(n, callbackFunction) {
    return n + callbackFunction();
}
function anotherNum(){
    return 3;
}

let totalSum = addTwoNumbers(5, anotherNum);
console.log(totalSum);

// Negative Numbers
function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            console.log(array[i]);
        }
    }
}
function isPositive(n) {
    return n > 0;
}
each([-2, 7, 11, -4, -10], isPositive);
