// Constructor function

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.yearOfBirth = function() {
        console.log("Year of birth: " + (2021 - this.age));
    }
}

let person1 = new Person('Elon Musk', 49);
let person2 = new Person('Jeff Bezos', 57);
person1.yearOfBirth()
delete person1.yearOfBirth;
console.log(person1.name)