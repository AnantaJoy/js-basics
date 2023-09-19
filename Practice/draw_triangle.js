// Solution 1
function drawTriangle(rows){
    let triangle = '';
    for(let i=0; i<=rows; i++){
        for(let j=0; j<i; j++){
            triangle += '*'; 
    }
    triangle += '\n';
    }
    console.log(triangle);
}

drawTriangle(5);