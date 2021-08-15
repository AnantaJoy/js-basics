var employee = {

    name: 'Joe',
    age: 28,
    designation: 'developer',
    //function setting designation of the employee
    set setDesignation(desig) {
        this.designation = desig //using this to refer to the "employee" object
    }
}
console.log("designation originally is:",employee.designation)
employee.setDesignation = 'engineer'
console.log("new designation is:",employee.designation)