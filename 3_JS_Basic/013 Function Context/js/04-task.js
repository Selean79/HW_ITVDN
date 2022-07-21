/*
Задание:
Найдите и исправьте ошибку, связанную с использованием контекста.
*/
let taskNameInput = document.querySelector("#task-name-input");
let addTaskButton = document.querySelector("#add-task-btn");
let startMessage = document.querySelector("#start-message");
let showAllButton = document.querySelector("#show-all-btn");
let showNotCompletedButton = document.querySelector("#show-not-completed-btn");
let taskList = document.querySelector(".task-list");

let tasks = [];

addTaskButton.addEventListener("click", addTaskHandler);
showAllButton.addEventListener("click", showAllHandler);
showNotCompletedButton.addEventListener("click", showNotCompletedHandler);

taskNameInput.addEventListener("keydown", function (e) {
    if (e.code == "Enter") addTaskHandler();
})

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

function showAllHandler() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        task.createIn(taskList);
    });
}

function showNotCompletedHandler() {
    taskList.innerHTML = "";
    tasks
        .filter(task => task.isDone == false)
        .forEach(task => {
            task.createIn(taskList);
        });
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
        input.addEventListener("click", this.changeState.bind(this));
        input.type = "checkbox";

        let p = document.createElement("p");
        p.innerText = this.text;

        this.div.append(input);
        this.div.append(p);

        if (this.isDone) {
            this.div.classList.add("completed");
            input.checked = true;
        }
        element.append(this.div);
    }


    changeState(element) {
        this.isDone = !this.isDone;
        this.div.classList.toggle("completed");
    }
}

// let newChangeState = changeTaskState.bind(Task);
