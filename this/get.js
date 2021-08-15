var employee = {

    name: 'Joe',
    age: 28,
    designation: 'Engineer',
    //function returning designation of the employee
    get display() {
        return this.designation //using this to refer to the "employee" object
    }
}
//this will display the designation
console.log(employee.display)