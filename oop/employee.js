// Employee salary

let employeeSalary = {
    baseSalary : 40000,
    overTime : 5,
    rate : 1000,
    getWage : function(){
        return this.baseSalary + (this.overTime * this.rate);
    }
}

employee1 = employeeSalary.getWage();
console.log(employee1);