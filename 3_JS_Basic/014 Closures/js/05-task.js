/*
 Задание:
 Перепишите класс Numbers, используя шаблон "модуль".
 Поля values и threshold должны быть закрыты в модуле и сохраняться в замыкании.
 getGreaterThanThreshold и getLessThanThreshold должны быть открытыми частями модуля.

 На практике, использование классов более предпочтительно, за исключением ситуаций,
 когда процесс разработки и целевая среда выполнения не дает возможность использовать
 ключевое солово class
 */

let numbers = (function() {
    let values;
    let threshold;

    return {
        setValues: function(val) {
            values = val;
        },

        setThreshold: function (val){
            threshold = val;
        },

        getGreaterThanThreshold: function() {
            return values.filter(v => v > threshold);
        },

        getLessThanThreshold() {
            return values.filter(v => v < threshold);
        }
    }
})();


 numbers.setThreshold(50);
 numbers.setValues([10, 20, 23, 11, 5, 6, 90, 33, 45, 67]);
 
 let gt = numbers.getGreaterThanThreshold();
 let lt = numbers.getLessThanThreshold();
 
 console.log(gt);
 console.log(lt);


// class Numbers {
//      #values;
//     #threshold;
//
//     constructor(threshold, values) {
//         this.#values = values;
//         this.#threshold = threshold;
//     }
//
//     // Возвращает все значения из массива values, которые больше, чем значение переменной threshold
//     getGreaterThanThreshold() {
//         return this.#values.filter(v => v > this.#threshold);
//     }
//
//     // возвращает все значения из массива values, которые меньше, чем значение переменной threshold
//     getLessThanThreshold() {
//         return this.#values.filter(v => v < this.#threshold);
//     }
// }

// let numbers = new Numbers(50, [10, 20, 23, 11, 5, 6, 90, 33, 45, 67]);
// let gt = numbers.getGreaterThanThreshold();
// let lt = numbers.getLessThanThreshold();
//
// console.log(gt);
// console.log(lt);

