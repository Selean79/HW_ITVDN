/*
Задание:
Добавьте в пользовательский интерфейс две кнопки "Показать незавершенные задачи" и
"Показать все"
При нажатии на кнопку "Показать незавершенные задачи" в списке задач должны отображаться только завершенные задачи.
При нажатии на "Показать все" в списке задач должны отображаться все задачи.

Подсказка
При нажатии на кнопки, нужно удалять содержимое элемента .task-list и на основе данных, которые находятся в массиве
tasks, заново строить DOM выбирая из массива те объекты, у которых свойство isDone содержит соответствующее значение.
*/
let taskNameInput = document.querySelector("#task-name-input");
let addTaskButton = document.querySelector("#add-task-btn");
let displayNotDoneTasksBtn = document.querySelector("#display-tasks-notDone-btn");
let displayAllTasksBtn = document.querySelector("#display-tasks-all-btn");
let startMessage = document.querySelector("#start-message");
let taskList = document.querySelector(".task-list");


let tasks = [];


addTaskButton.addEventListener("click", addTaskHandler);
taskNameInput.addEventListener("keydown", function (e) {
    if (e.code == "Enter") {
        addTaskHandler();
    }
})

displayNotDoneTasksBtn.addEventListener("click", removeDoneTasks);
displayAllTasksBtn.addEventListener("click", showAllTasks);

function removeDoneTasks() {
    let doneTasks = document.querySelectorAll(".completed");

    for (const element of doneTasks) {

        element.remove();
    }
}

function showAllTasks() {
    let allTasks = document.querySelectorAll(".task");
    for (const element of allTasks) {
        element.remove();
    }

    for (const element of tasks) {
        let newTask = new Task(element.text);
        newTask.createIn(taskList);
    }
}

function addTaskHandler() {
    if (taskNameInput.value) {
        if (!startMessage.hidden) startMessage.hidden = true;

        let newTask = new Task(taskNameInput.value);
        newTask.createIn(taskList);
        tasks.push(newTask);

        taskNameInput.value = "";
    } else {
        alert("введите имя задачи");
    }
}

class Task {
    constructor(text) {
        this.text = text;
        this.isDone = false;
        this.div = null;
    }

    createIn(element) {
        this.div = document.createElement("div");
        this.div.classList.add("task");

        let input = document.createElement("input");
        input.addEventListener("click", () => this.changeState(this.div));
        input.type = "checkbox";

        let p = document.createElement("p");
        p.innerText = this.text;

        this.div.append(input);
        this.div.append(p);
        element.append(this.div);
    }

    changeState(element) {
        this.isDone = !this.isDone;
        element.classList.toggle("completed");
    }
}