
let person = {
    name: 'Tesla',
    age: 2020,

    // Method
    yearOfUpdate: function() {
        return  this.age - 2019;
    }
};

console.log(person);
person.name = 'Elon Musk';
console.log(person);

person['age'] = 2021;
console.log(person);

console.log(person.yearOfUpdate());