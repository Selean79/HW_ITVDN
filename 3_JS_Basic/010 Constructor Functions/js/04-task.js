/*
 Задание:
 Перепишите функцию конструктор Rect. Вынесите методы из экземпляра в прототип.
 */

function Rect(width, height) {
    this.width = width;
    this.height = height;
}

Rect.prototype.getArea = function () {
    return this.height * this.width;
};

Rect.prototype.getPerimeter = function () {
    return this.height * 2 + this.width * 2;
};


let rect1 = new Rect(100, 50);
let rect2 = new Rect(25, 33);

console.log("rect1 area " + rect1.getArea());
console.log("rect1 perimeter " + rect1.getPerimeter());

console.log("rect2 area " + rect2.getArea());
console.log("rect2 perimeter " + rect2.getPerimeter());