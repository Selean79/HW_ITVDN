/*
Задание:
Перепишите код, таким образом, чтобы counter1 и counter2 работали со своим значением счетчика.
Используйте для этого замыкание.
*/

function makeCounter() {
let counter = 0;

     function increment() {
      return   counter++;
    }
    return increment;
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log("counter1");

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log("counter2");

console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());