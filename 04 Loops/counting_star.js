showStar(10);

function showStar(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = "";
        for (let i = 1; i <= row; i++) pattern += "*";
        console.log(pattern);
    }
}
// 1. Write a function that takes a number and prints a triangle like this:
// *
// **
// ***
// ****
// *****
// 2. Write a function that takes a number and prints a triangle like this:
// *****
// ****
// ***
// **
// *
// 3. Write a function that takes a number and prints a triangle like this:
//     *
//    **
//   ***
//  ****
// *****
// 4. Write a function that takes a number and prints a triangle like this:
// *****
//  ****
//   ***
//    **
//     *