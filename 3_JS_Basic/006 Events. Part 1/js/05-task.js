/*
    Задание:
    Сделайте так, чтобы в каждой созданной задаче, после текста задачи создавалась кнопка "Удалить".
    При нажатии на которую вся задача удалялась из списка задач.
    */
let taskNameInput = document.querySelector("#task-name-input");
let addTaskButton = document.querySelector("#add-task-btn");
let startMessage = document.querySelector("#start-message");
let taskList = document.querySelector(".task-list");
// let task = document.querySelector()


addTaskButton.addEventListener("click", addTaskHandler);






function createTask(text) {
    let div = document.createElement("div");

    div.classList.add("task");
    

    let input = document.createElement("input");
    input.addEventListener("click", changeTaskState);

    let btnDelete = document.createElement("button");
    btnDelete.addEventListener("click", deleteTask);
    btnDelete.innerText = "Удалить";
    btnDelete.style.marginLeft = "30px";


    input.type = "checkbox";
    let p = document.createElement("p");

    p.innerText = text;

    div.append(input);
    div.append(p);
    p.append(btnDelete);

    return div;
}

function changeTaskState() {
    if (this.checked) {
        this.parentElement.classList.add("completed");
    } else {
        this.parentElement.classList.remove("completed");
    }
};

function deleteTask(){
    this.closest("div").remove();
    if(!document.querySelector(".task")){
        startMessage.hidden = false;
    }
};

function addTaskHandler() {
    if (taskNameInput.value) {
        if (!startMessage.hidden) startMessage.hidden = true;

        let newTask = createTask(taskNameInput.value);
        taskList.append(newTask);
        taskNameInput.value = "";
    } else {
        alert("введите имя задачи");
    }
}