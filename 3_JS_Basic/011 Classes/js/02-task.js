class Cylinder {
    #height;
    #radius;

    constructor(height, radius) {
        this.#height = height;
        this.#radius = radius;

    }

    getVolume() {
        return this.#height * this.#radius;
    };
}

const cyl1 = new Cylinder(10, 5);
const cyl2 = new Cylinder(5, 11);
console.log(cyl1.getVolume());
console.log(cyl2.getVolume());