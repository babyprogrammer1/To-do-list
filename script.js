// Get references to the input field and task list
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Prevent form submission from reloading the page
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

// Function to create a button with an icon and event listener
function createButton(iconClass, onClick) {
    const button = document.createElement('button');
    const icon = document.createElement('i');
    icon.className = iconClass;
    button.appendChild(icon);
    button.addEventListener('click', onClick);
    return button;
}

// Function to add a new task to the list
function addTask() { 
    const taskText = taskInput.value;
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const completeButton = createButton('fas fa-check', completeTask);
        const deleteButton = createButton('fas fa-trash', deleteTask);

        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

// Function to mark a task as complete
function completeTask(event) {
    const task = event.target;
    task.classList.toggle('completed');
}

// Function to delete a task from the list
function deleteTask(event) {
    const task = event.target.parentElement;
    taskList.removeChild(task);
}