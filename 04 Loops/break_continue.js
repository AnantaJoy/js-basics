// break: to stop the loop
// continue: to skip the current iteration and continue with the next one

// break
console.log('break');
var count = 0;
while (count < 10) {
    if (count === 5) {
        break;
    }
    console.log(count);
    count++;
}

// continue
console.log('continue');
let i = 0;
while (i < 10) {
    if (i === 5) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}