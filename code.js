class Vehicle {
    constructor(color = "blue", wheels = 4, horn = "beep beep") {
        this.color = color;
        this.wheels = wheels;
        this.horn = horn;
    }

    honkHorn() {
        return this.horn;
    }
}

class Bicycle extends Vehicle {
    constructor(color = "blue", wheels = 4, horn = "beep beep") {
        
        super(color, 2, "ring ring"); 
    }
}


const vehicle = new Vehicle();
console.log(vehicle.honkHorn()); 

const bicycle = new Bicycle();
console.log(bicycle.honkHorn()); 