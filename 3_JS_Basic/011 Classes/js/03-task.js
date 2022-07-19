/*
Задание:
Замените функцию конструктор на класс.
Все свойства класса Car поменяйте на закрытые поля и для каждого поля добавьте getter и setter по необходимости.
Для поля html предусмотрите возможность только получения значения, организуйте код таким образом, чтобы не допустить
редактирование значения свойства html напрямую.
*/
class Car{
    #image;
    #manufacturer;
    #html;
    
    constructor(image, manufacturer) {
        this.#image = image;
        this.#manufacturer = manufacturer;
        this.#html = `<img src="images/${this.image}" /><br />Производитель: ${this.manufacturer}<br />`; 
    }
    
    get image(){
        return this.#image;
    }
    
    get manufacturer(){
        return this.#manufacturer
    }
    
    get html(){
        return this.#html;
    }


}

let car1 = new Car("audi-a6-250.jpg", "Audi");
let car2 = new Car("jaguar-x-type-250.jpg", "Jaguar");
let car3 = new Car("porsche-carrera-911-250.jpg", "Porsce");

let placeholder1 = document.querySelector("#placeholder1");
let placeholder2 = document.querySelector("#placeholder2");
let placeholder3 = document.querySelector("#placeholder3");

placeholder1.innerHTML = car1.html;
placeholder2.innerHTML = car2.html;
placeholder3.innerHTML = car3.html;


