var students = [
    {
        name: "Mary",
        age: 10,
        grades: [90, 88, 95]
    },
    {
        name: "Joseph",
        age: 11,
        grades: [80, 100, 90, 96]
    }
];

let getAverage = function (students){
    let averages = [];
    let sum = 0;
    let scores = 0;
    for (let i = 0; i < students.length; i++){
        scores = students[i]["grades"];
        for (let j = 0; j < scores.length ; j++){
            sum += scores[j];
        }
        averages[i] = sum / scores.length;
        sum = 0;
    }
    return averages;
}

console.log(getAverage(students));