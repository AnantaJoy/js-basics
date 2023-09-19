// reverse a string
function reverseString(str){
    return str.split('').reverse().join('');
}


console.log(reverseString("Hello world!"));

// reverse a string using the spread operator

function reverseString(str){
    return [...String(str)].reverse().join('');
}

console.log(reverseString("Bangladesh!"));
console.log(reverseString("United States!"));

// without reverse() function
function withoutReversedString(str){
    let reverse = "";
    for (let i = str.length-1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

console.log(withoutReversedString("String"))

