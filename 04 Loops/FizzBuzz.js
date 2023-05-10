// FizzBuzz 

function fizzBuzz(num){
    if(num%3===0 && num%5===0){
        return "FizzBuzz";
    }
    else if (num%3===0){
        return "Fizz";
    }
    else if(num%5===0){
        return "Buzz";
    }
    else if(num%3!==0 && num%5!==0){
        return num;
    }
    else{
        return "Not a number";
    }

}

let output = fizzBuzz(5);
console.log(output);