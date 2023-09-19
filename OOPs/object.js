let students = {
    name: 'Ananta',
    id: 178239,
    email: 'anantajoy007@gmail.com',
    dept: 'EEE',
    session : '2017-18'
}

console.log(students.email);
students.result = 3.4;
console.log(students.result);

delete students.session;
console.log(students.session);

// Iterating through objects

for(keys in students){
    console.log(keys);
}