/*
       Задание:
       Выполните рефакторинг кода. Сделайте так, чтобы объекты создавались не через литералы, а через функцию конструктор.
*/

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.show = function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

let user1 = new User("Ivan", "Ivanov");
let user2 = new User("Olga", "Petrova");

user1.show();
user2.show();
