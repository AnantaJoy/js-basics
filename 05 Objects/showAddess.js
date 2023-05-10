
// using factory function
let showAddress = function (street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let address = showAddress('a', 'b', 'c');
console.log(address);

for(let key in address)
    console.log(key,':' ,address[key]);


// using constructor function

function ShowAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = new ShowAddress('a', 'b', 'c');
console.log(address1);

for(let key in address1)
    console.log(key,':' ,address1[key]);