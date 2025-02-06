const taskTextInput = document.querySelectorByID("task-text");
const taskList = document.querySelector(".task-list");
const countDayInput = document.querySelector(".count-day__input");
const createTaskButton = document.querySelector(".create__task-button");

let tasks = [];

document.addEventListener("DOMContentLoaded", function(){
    const storedTasks = localStorage.getItem("tasks");

    if(storedTasks) {
        tasks = JSON.parse(storedTasks);
        tasks.forEach(task => {
            createTasks(task);
        });
    }
});


const isCheck = name => document.querySelector(`input[name=" ` + name + ` "]:checked`);

function resetInputFields() {
    countDayInput.value = '';
    taskTextInput.value = '';

    taskTextInput.focus();
}

function createTask(task) {
    const taskItemHTML = document.createElement("li");
    taskItemHTML.className = "task-item";
    taskItemHTML.setAttribute("data-task-id", task.id);

    taskList.append(taskItemHTML);

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.className = "delete-task__button";
    deleteTaskButton.innerHTML = "Удалить задачу";

    deleteTaskButton.addEventListener("click", function(){
        taskItemHTML.remove();
    })
    
}
