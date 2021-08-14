function Car(color, brand){
    this.color = color;
    this.brand = brand;
    this.info = function(){
        console.log('Color: '+this.color+', Brand: '+this.brand);
    }
}

const car1 = new Car('Black', 'Audio');
const car2 = new Car('Red', 'BMW');
car1.info();
car2.info();

// this keyword actually creates a empty object
console.log(this);