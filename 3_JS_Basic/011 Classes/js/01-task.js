/*
 Задание:
 Перепишите данный код на использование классов вместо функций-конструкторов.
 */

class Car {

    constructor(model, year) {
        this.year = year;
        this.model = model;
    }
        showInfo() {
            console.log(this.model + " " + this.year);
        }
}

let car1 = new Car("Chevrolet", 2008);
car1.showInfo();
console.log(car1.year);
console.log(car1.model);
