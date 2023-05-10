// enumeration of object properties

const car = {
    brand: 'Ford',
    model: 'Fiesta',
    start: function() {
        console.log('Engine started');
    }
};

//
for (let key in car) {
    console.log(key, car[key]);
}

// Object.keys() returns an array of keys
console.log(Object.keys(car));

// Object.values() returns an array of values
console.log(Object.values(car));

// Object.entries() returns an array of [key, value] pairs
console.log(Object.entries(car));

// Object.freeze() makes an object immutable
Object.freeze(car);

if ('brand' in car) {
    console.log('Car has a brand name');
} else {
    console.log('Car has no brand name');
}