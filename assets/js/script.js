// variables targeting Add Task button and Task List
var buttonEl = document.querySelector("#save-task");
var taskListEl = document.querySelector("#tasks-to-do");

// Create new task function
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "New task";
    taskListEl.appendChild(listItemEl);
}

// When [Add Task] button is clicked, new task is appended to #tasks-to-do
buttonEl.addEventListener("click", createTaskHandler);


