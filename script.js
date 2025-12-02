// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage on start
document.addEventListener("DOMContentLoaded", loadTasks);

// Add task event
addBtn.addEventListener("click", addTask);

// Add task when pressing Enter
taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    saveTask(task);
    renderTask(task);

    taskInput.value = "";
}

// Save to localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render a single task to the UI
function renderTask(task) {
    const li = document.createElement("li");
    li.className = "task-item";
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
        <span class="task-text">${task.text}</span>
        <div>
            <button class="delete-btn">X</button>
        </div>
    `;

    // Toggle completed
    li.addEventListener("click", () => toggleCompleted(task.id, li));

    // Delete task
    li.querySelector(".delete-btn").addEventListener("click", (e) => {
        e.stopPropagation(); 
        deleteTask(task.id, li);
    });

    taskList.appendChild(li);
}

// Load all tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => renderTask(task));
}

// Mark as completed
function toggleCompleted(id, element) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.map(task => {
        if (task.id === id) task.completed = !task.completed;
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    element.classList.toggle("completed");
}

// Delete a task
function deleteTask(id, element) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    element.remove();
}
