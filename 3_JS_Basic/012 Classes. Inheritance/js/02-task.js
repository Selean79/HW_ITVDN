/*
Задание:
Сделайте так, чтобы класс Truck наследовался от класса Car.
Переопределит метод move, в классе Truck -
Если в грузовик загружено менее 500 кг груза, должна срабатывать реализация метода из класса Car
Если в грузовик загружено более 500 кг, должно выводиться сообщение "Грузовик движется со скоростью 50 км/час."
*/

class Car {
    move() {
        console.log("Машина двигается со скоростью 80 км/час");
    }
}

class Truck extends Car {
    weight;

    loadCargo(weight) {
        if (weight > 1000) {
            console.log("Этот грузовик не может перевозить более 1000кг груза");
        } else {
            this.weight = weight;
            console.log(`В грузовик загружено ${this.weight}кг.`);
        }
    }

    move() {
        if (this.weight <= 500) {
            super.move();
        } else {
            console.log("Грузовик движется со скоростью 50 км/ч");
        }
    }
}


let v1 = new Car();
v1.move();
console.log("-------------");
let v2 = new Truck();
v2.loadCargo(1500);
v2.loadCargo(990);
v2.move();

console.log("-------------");
let v3 = new Truck();
v3.loadCargo(100);
v3.move();
