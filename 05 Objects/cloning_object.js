const car = {
    brand: 'Ford',
    model: 'Fiesta',
    start: function() {
        console.log('Engine started');
    }
};

// cloning an object
const car1 = {};
for (let key in car) {
    car1[key] = car[key];
}
console.log(car1);

// cloning an object
const car2 = Object.assign({}, car);
console.log(car2);

// cloning an object using spread operator
const car3 = {...car};
console.log(car3);

// cloning an object using JSON
const car4 = JSON.parse(JSON.stringify(car));
console.log(car4);