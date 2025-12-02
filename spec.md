# Todo-App Specification

## Features

- Add, complete, and delete tasks
- Filter tasks (All, Active, Completed)
- Clear all completed tasks at once
- Toggle between 3 color themes (Pastel, Vibrant, Neon)
- Persistent storage using localStorage
- Task counter and empty state UI
- Smooth animations and responsive design

## UI Components

- **Header** - Title, subtitle, theme toggle
- **Input Section** - Task input + add button
- **Filter Section** - All/Active/Completed buttons
- **Task List** - Dynamic task items with animations
- **Task Item** - Checkbox, text, delete button
- **Footer** - Task counter + clear button
- **Empty State** - Message for no tasks

## External APIs Used

- **LocalStorage API** - Persist tasks across sessions
- **Google Fonts** - Inter font family
- **DOM API** - DOM manipulation and events

## Key JavaScript Functions

## Key JavaScript Functions

- **`addTask()`** - Create and save new task
- **`saveTask(task)`** / **`renderTask(task)`** - Persist and display task
- **`toggleCompleted(id)`** - Toggle task completion status
- **`deleteTask(id)`** / **`clearCompleted()`** - Remove tasks
- **`applyFilter()`** - Filter tasks by status
- **`updateEmptyState()`** - Manage empty state and footer visibility
- **`toggleTheme()`** / **`loadTheme()`** - Manage theme persistence
- **`escapeHtml(text)`** - Sanitize user input for XSS protection

### Task Object

```javascript
{
  id: 1733138400000,        // Unique timestamp-based ID
  text: "Buy groceries",    // Task description
  completed: false          // Completion status
}
```

## Data Structure

**Task Object:**

```javascript
{ id: 1733138400000, text: "Buy groceries", completed: false }
```

**LocalStorage Keys:** `tasks` (JSON array), `theme` (current theme name)

## Key Details

- **Event Listeners:** Add task (click/Enter), toggle completion (click), delete (click), filter, clear completed, theme toggle
- **CSS Features:** Flexbox, gradients, transitions, animations, theme variants (.pastel, .vibrant, .neon)
- **Browser Requirements:** ES6, LocalStorage, CSS3, SVG support
- **No external dependencies** - Vanilla JavaScript only
