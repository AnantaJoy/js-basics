let stdInfo = function (name, age, dept) {
    let info  = {
        name : name,
        age : age,
        dept : dept,
        sayHello: function(){
            let welcomeMessage = `Hi ${this.name}, welcome to the dept of ${this.dept}`;
            console.log(welcomeMessage);
        }
    }
    return this.info;
}
let std1 = stdInfo('Aman', 21,'EEE');
let std2 = stdInfo('Jony',23,'CSE');
console.log(std1.info.sayHello());