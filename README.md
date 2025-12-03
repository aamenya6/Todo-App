# Todo-App

A beautiful, fully-functional task management application built with vanilla HTML, CSS, and JavaScript. Organize your tasks with style using multiple color themes, filtering options, and persistent storage.

## 📋 Features

- Add, complete, and delete tasks
- Filter tasks (All, Active, Completed)
- Clear all completed tasks at once
- Three color themes: Pastel, Vibrant, Neon
- Persistent storage with localStorage
- Task counter and real-time updates
- Smooth animations and responsive design

## 🎨 UI Components

- **Header** - Title, subtitle, theme toggle
- **Input Section** - Task input + add button
- **Filter Buttons** - All/Active/Completed filters
- **Task List** - Items with checkboxes, text, delete buttons
- **Footer** - Task counter + clear button
- **Empty State** - Message for new users

## 🔧 Technologies Used

- **HTML5** - Semantic structure and inline SVG icons
- **CSS3** - Advanced features including:

## 🔧 Technologies

- **HTML5** - Semantic structure with SVG icons
- **CSS3** - Flexbox, gradients, animations, themes
- **Vanilla JavaScript (ES6)** - No frameworks
- **LocalStorage API** - Client-side persistence
- **Google Fonts** - Inter typography
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Todo-App
```

2. Open `index.html` or run a local server:

```bash
python -m http.server 8000  # Python
npx http-server              # Node.js
php -S localhost:8000        # PHP
```

2. Click the **+** button or press **Enter**
3. Watch your task appear with a smooth animation!

### Completing Tasks

- Click on any task (or its checkbox) to toggle completion
- Completed tasks show a strikethrough and fade effect

### Deleting Tasks

- Hover over a task to reveal the delete button (X)
- Click to remove the task with a smooth animation

### Filtering Tasks

- Use the filter buttons to view:
  - **All** - Every task
  - **Active** - Incomplete tasks only
  - **Completed** - Finished tasks only

### Clearing Completed Tasks

## 🚀 Usage

- **Add task:** Type and press Enter or click +
- **Complete task:** Click task or checkbox
- **Delete task:** Hover and click X
- **Filter tasks:** Use All/Active/Completed buttons
- **Clear completed:** Click button in footer
- **Change theme:** Click theme icon in headerp
  ├── style.css # Styling and theme definitions
  ├── script.js # Core JavaScript functionality
  └── README.md # This file

```

## 🎯 Key JavaScript Functions

| Function | Purpose |
|----------|---------|
| `addTask()` | Creates new task and adds to DOM |
| `saveTask(task)` | Persists task to localStorage |
| `renderTask(task)` | Renders task item in the list |
| `toggleCompleted(id)` | Toggle task completion status |
| `deleteTask(id)` | Remove task with fade animation |
| `clearCompleted()` | Bulk delete all completed tasks |
| `applyFilter()` | Show/hide tasks based on current filter |
## 🎯 Key Functions

`addTask()` · `saveTask()` · `renderTask()` · `toggleCompleted()` · `deleteTask()` · `clearCompleted()` · `applyFilter()` · `toggleTheme()` · `loadTheme()` · `loadTasks()` · `updateEmptyState()` · `escapeHtml()`

## 📄 License

MIT License - Free to use and modify.

---

**Made with ❤️ for productive task management**
```

# Deployed App URL

https://aamenya6.github.io/Todo-App/
