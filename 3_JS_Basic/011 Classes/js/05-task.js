/*
    Задание:
    Перепишите данный код с использованием классов.
    Создайте класс MonthReport со свойствами month, amount, users.
    Добавьте в класс метод render, который будет визуализировать содержимое класса на странице.
    Создайте массив экземпляров класса MonthReport со значениями, которые сейчас находятся в массиве source.
    Пройдите циклом по массиву и на каждом экземпляре класса MonthReport вызовите метод render.
*/

class MonthReport {
    #month;
    #amount;
    #users;

    constructor(month, amount, users) {
        this.#month = month;
        this.#amount = amount;
        this.#users = users;

    }

    get month() {
        return this.#month;
    }

    get amount(){
        return this.#amount;
    }

    get users(){
        return this.#users;
    }

    render() {
        let template = document.querySelector("#monthReport").innerHTML;
        let output = document.querySelector("#output");
        let currentMonth = this.month;
        let currentAmount = this.amount;
        let currentUsers = this.users;

        document.querySelector("button").addEventListener("click", addInfo);

        function  addInfo(){
            const monthData = {
                month: currentMonth,
                amount: currentAmount,
                users: currentUsers
            };
            let html = Mustache.render(template, monthData);
            output.insertAdjacentHTML("beforeend", html);
            document.querySelector("button").removeEventListener("click", addInfo);
        }



    }
};


let source = [
    {
        month: "Январь",
        amount: 20,
        users: ["Claudia Contreras", "Blair Hayden", "Montgomery Cohen"]
    },
    {
        month: "Февраль",
        amount: 140
    },
    {
        month: "Март",
        amount: 115,
        users: ["Blair Hayden", "Montgomery Cohen"]
    }
];

let array = [
 new MonthReport(source[0].month, source[0].amount, source[0].users),
 new MonthReport(source[1].month, source[1].amount, source[1].users),
 new MonthReport(source[2].month, source[2].amount, source[2].users),
];

array.forEach(elem =>{
   elem.render();
});


