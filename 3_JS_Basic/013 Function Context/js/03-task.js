/*
Задание:
Найдите и исправьте проблему в методах getGreaterThanThreshold и getLessThanThreshold
*/

class Numbers {
    #values;
    #threshold;

    constructor(threshold, values) {
        this.#values = values;
        this.#threshold = threshold;
    }

    // Возвращает все значения из массива values, которые больше, чем значение переменной threshold
    getGreaterThanThreshold() {
        return this.#values.filter((v) => {
            return v > this.#threshold;
        })
    }

    // возвращает все значения из массива values, которые меньше, чем значение переменной threshold
    getLessThanThreshold() {
        return this.#values.filter((v) => {
            return v < this.#threshold;
        })
    }
}

let numbers = new Numbers(50, [10, 20, 23, 11, 5, 6, 90, 33, 45, 67]);
let gt = numbers.getGreaterThanThreshold();
let lt = numbers.getLessThanThreshold();

console.log(gt);
console.log(lt);