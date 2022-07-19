/*
 Задание:
 Сделайте так, чтобы класс Truck наследовался от класса Car.
 Переопределит метод move, чтобы в производном классе он выводил сообщение, "Грузовик движется со скоростью 50 км/час".
 */

class Car {
    start() {
        console.log("Двигатель запущен.");
    }

    move() {
        console.log("Машина двигается со скоростью 80 км/час");
    }
}

class Truck extends Car{
    weight;
    loadCargo(weight) {
        if (weight > 1000) {
            console.log("Этот грузовик не может перевозить более 1000кг груза");
        }
        else {
            this.weight = weight;
            console.log(`В грузовик загружено ${this.weight}кг.`);
        }
    }
}

let v1 = new Car();
v1.start();
v1.move();
console.log("--------------------------");
let v2 = new Truck();
v2.start();
v2.move();
v2.loadCargo(1500);
v2.loadCargo(990);
