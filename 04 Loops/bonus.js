function getBonus(target){
    const targetSell = 100000;
    const bonusRate = 50000;
    let bonusPoint = 0;

    if(target > targetSell){
        bonusPoint += (target - targetSell)/ bonusRate;
        return Math.floor(bonusPoint);
    }
    else{
        return bonusPoint;
    }
}




let output = getBonus(200000);
console.log(output); // --> 8