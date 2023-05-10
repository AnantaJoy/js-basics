
const options = [null, undefined, 0,44 ,false, "", NaN,'Hello'];

console.log(falsyCount(options));

function falsyCount(options){
    let count = 0;
    for(let value of options){
        if(!value){
            count++;
        }
    }
    return count;
}