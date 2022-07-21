/*
        Задание:
        Создайте функцию showWithDelay(массив);
        Метод принимает массив и на консоль по очереди выводит каждый элемент массива с интервалом в одну секунду
        Сделайте два варианта с setInterval и setTimeout
*/

let users = [
    "Andrew",
    "Denis",
    "Nikita",
    "Jane",
    "Stanislav",
];

let i = 0;

function showWithDelay(users) {
    // setTimeout(showWithDelay, 1000, users);   // Timeout version
    if (i < users.length) {
        console.log(users[i]);
        i++;
    }
}


// setInterval(showWithDelay, 1000, users, i);
 setTimeout(showWithDelay, 1000, users, i); // Timeout version
