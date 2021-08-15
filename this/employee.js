// var employee = {
//     name: 'Joe',
//     age: 28,
//     designation: 'developer',
//     display() {
//         return designation
//     }
// }
// //this will generate an error
// console.log(employee.display())
var employee = {
    name: 'Joe',
    age: 28,
    designation: 'developer',
    display() {
        return this.designation;
    }
}
//this will generate an error
console.log(employee.display())
console.log(this);