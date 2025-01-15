// Get references to the input field and task list
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Prevent form submission from reloading the page
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

// Function to create a button with an icon and event listener
function createButton(iconClass, onClick, buttonClass = '') {
    const button = document.createElement('button');
    const icon = document.createElement('i');
    icon.className = iconClass;
    button.className = buttonClass;
    button.appendChild(icon);
    button.addEventListener('click', onClick);
    return button;
}

// Function to add a new task to the list
function addTask() { 
    const taskText = taskInput.value;
    if (taskText !== '') {
        const listItem = document.createElement('li');

        const completeButton = createButton('fas fa-check', toggleCompleteTask);
        const deleteButton = createButton('fas fa-trash', deleteTask, 'delete');
        const textNode = document.createElement('span');
        textNode.textContent = taskText;

        listItem.appendChild(completeButton);
        listItem.appendChild(textNode);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

// Function to toggle task completion
function toggleCompleteTask(event) {
    const icon = event.target;
    const listItem = icon.parentElement;
    listItem.classList.toggle('completed');
}

// Function to delete a task from the list
function deleteTask(event) {
    const task = event.target.parentElement;
    task.style.animation = 'fadeOut 0.8s ease-in-out';
    task.addEventListener('animationend', () => {
        taskList.removeChild(task);
    });
}