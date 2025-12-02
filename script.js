const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");
const footer = document.getElementById("footer");
const taskCount = document.getElementById("taskCount");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const themeToggle = document.getElementById("themeToggle");

const themes = ['pastel', 'vibrant', 'neon'];
let currentThemeIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    loadTheme();
});

addBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompleted);
themeToggle.addEventListener("click", toggleTheme);

function toggleTheme() {
    document.body.classList.remove(themes[currentThemeIndex]);
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    if (themes[currentThemeIndex] !== 'pastel') {
        document.body.classList.add(themes[currentThemeIndex]);
    }
    localStorage.setItem("theme", themes[currentThemeIndex]);
    
    themeToggle.style.transform = 'rotate(360deg) scale(1.1)';
    setTimeout(() => {
        themeToggle.style.transform = '';
    }, 300);
}

function loadTheme() {
    const savedTheme = localStorage.getItem("theme") || 'pastel';
    currentThemeIndex = themes.indexOf(savedTheme);
    if (currentThemeIndex === -1) currentThemeIndex = 0;
    if (themes[currentThemeIndex] !== 'pastel') {
        document.body.classList.add(themes[currentThemeIndex]);
    }
}

taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});

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
    updateEmptyState();

    taskInput.value = "";
    taskInput.focus();
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTask(task) {
    const li = document.createElement("li");
    li.className = "task-item";
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
        <div class="task-content">
            <div class="checkbox">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <span class="task-text">${escapeHtml(task.text)}</span>
        </div>
        <button class="delete-btn" aria-label="Delete task">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    `;

    li.querySelector(".task-content").addEventListener("click", () => toggleCompleted(task.id, li));

    li.querySelector(".delete-btn").addEventListener("click", (e) => {
        e.stopPropagation(); 
        deleteTask(task.id, li);
    });

    taskList.appendChild(li);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => renderTask(task));
    updateEmptyState();
}

function toggleCompleted(id, element) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.map(task => {
        if (task.id === id) task.completed = !task.completed;
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    element.classList.toggle("completed");
    updateEmptyState();
}

function deleteTask(id, element) {
    element.style.opacity = '0';
    element.style.transform = 'translateX(20px)';
    
    setTimeout(() => {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks = tasks.filter(task => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        element.remove();
        updateEmptyState();
    }, 200);
}

function updateEmptyState() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const completedCount = tasks.filter(t => t.completed).length;
    const remainingCount = tasks.length - completedCount;
    
    if (tasks.length === 0) {
        emptyState.classList.remove("hidden");
        footer.classList.add("hidden");
    } else {
        emptyState.classList.add("hidden");
        footer.classList.remove("hidden");
        
        taskCount.textContent = `${remainingCount} task${remainingCount !== 1 ? 's' : ''} remaining`;
        
        if (completedCount > 0) {
            clearCompletedBtn.classList.remove("hidden");
        } else {
            clearCompletedBtn.classList.add("hidden");
        }
    }
}

function clearCompleted() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const completedIds = tasks.filter(t => t.completed).map(t => t.id);
    
    const completedItems = document.querySelectorAll(".task-item.completed");
    completedItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(20px)';
    });
    
    setTimeout(() => {
        tasks = tasks.filter(t => !t.completed);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
        completedItems.forEach(item => item.remove());
        updateEmptyState();
    }, 200);
}
