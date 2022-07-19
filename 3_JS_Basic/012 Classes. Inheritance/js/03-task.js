/*
Задание:
Найдите и исправьте ошибку
*/

class Car {
    model;

    constructor(model) {
        this.model = model;
    }

    move() {
        console.log(`Машина ${this.model} двигается со скоростью 80 км/час`);
    }
}

class Truck extends Car {
    weight;
    maxCargo;

    constructor(model,  maxCargo) {
        super(model);
        this.maxCargo = maxCargo;
    }

    loadCargo(weight) {
        if (weight > this.maxCargo) {
            console.log(`Этот грузовик не может перевозить более ${this.maxCargo}кг груза`);
        }
        else {
            this.weight = weight;
            console.log(`В грузовик загружено ${this.weight}кг.`);
        }
    }
}

let v1 = new Car("Mazda");
v1.move();

let v2 = new Truck("Tatra", 2000);
v2.loadCargo(500 );
v2.move();
