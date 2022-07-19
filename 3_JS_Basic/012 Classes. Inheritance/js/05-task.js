/*
Задание:
Создайте класс Cone (конус), который будет расширять класс Circle (наследоваться от класса Circle), конструктор класса Cone должен принимать радиус и высоту конуса.
В классе Cone добавьте метод getVolume, который будет возвращать объем конуса и переопределите метод getArea таким образом, чтобы он вычислял площадь полной поверхности конуса.
По возможности используйте логику базового класса через ключевое слово super
*/
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Cone extends Circle {
    height;

    constructor(height, radius) {
        super(radius);
        this.height = height;
    }

    getVolume() {
        return 1 / 3 * (super.getArea() * this.height); //Объем конуса 1/3 * pi * radius * radius;
    }

    getArea() {
        const length = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2)); //Нахождение длины образующей конуса
        return Math.PI * this.radius * (length + this.radius); //Полная площадь поверхности конусв
    }
}

let cone = new Cone(4, 3);

alert(`Объем конуса равен: ${cone.getVolume().toFixed(2)}`);
alert(`Полная площадь поверхнсти конуса равна: ${cone.getArea().toFixed(2)}`);