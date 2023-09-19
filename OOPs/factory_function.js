// Factory function

function Car(color,){
    return {
        color,
        brand: function(){
            console.log('Audi');
        }
    };
}

const car1 = Car('Black');
console.log(car1.color);
car1.brand(); 