// prime number is a number that is only divisible by 1 and itself

// 5 is a prime number because it is only divisible by 1 and 5
// 6 is not a prime number because it is divisible by 1, 2, 3, and 6

// 1. Write a function that takes a number and returns true if it is a prime number, false otherwise
// 2. Write a function that takes a number and returns all the prime numbers up to that number


console.log(showPrime(5));

function showPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num%i==0) return false;
        else return true;
    }
}