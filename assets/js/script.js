// variables targeting Add Task button and Task List
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Create new task function
var createTaskHandler = function(event) {
    // prevent page reload
    event.preventDefault();
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "New task";
    tasksToDoEl.appendChild(listItemEl);
}

// When [Add Task] button is clicked, new task is appended to #tasks-to-do
formEl.addEventListener("submit", createTaskHandler);


