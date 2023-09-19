let isString = (str) => {
    return typeof str === 'string' || str instanceof String;
};

console.log(isString('String'));

let stringObj = new String("String Object");
console.log(isString(stringObj));