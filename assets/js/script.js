// variables targeting Add Task button and Task List
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Create new task function
var taskFormHandler = function(event) {
    // prevent page reload
    event.preventDefault();

    // target task name input
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    
    // target task type input
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // validate input
    if (!taskNameInput || !taskTypeInput) {
        alert("Please fill out the task form");
        return false;
    }

    formEl.reset();

    // create object for task data
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send object to createTaskEl
    createTaskEl(taskDataObj);
}

var createTaskEl = function (taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";

    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    // append list info to li
    listItemEl.appendChild(taskInfoEl);

    // append to task list
    tasksToDoEl.appendChild(listItemEl);
}

// When [Add Task] button is clicked, new task is appended to #tasks-to-do
formEl.addEventListener("submit", taskFormHandler);


