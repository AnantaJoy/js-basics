// bmi index

let weight = 60;
let height = 1.65;
let bmi = weight / (height * height);

if (bmi < 18.5) {
    console.log("Underweight");
    }
else if(bmi > 18.5 && bmi < 25) {
    console.log("Normal weight");
    }
else if(bmi > 25 && bmi < 30) {
    console.log("Overweight");
    }
else{
    console.log("Obesity");
}