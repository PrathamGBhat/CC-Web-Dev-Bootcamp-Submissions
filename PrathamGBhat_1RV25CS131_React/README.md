# Smart Task Manager

A modern React task management app with intelligent features to help you organize goals and tasks smarter than a basic to-do list.

## Features

### Core Features
- **Add Tasks with Multiple Properties**: Create tasks with title, priority (High/Medium/Low), and custom categories
- **Interactive Actions**: 
  - Toggle task completion
  - Delete tasks
  - Filter by category
  - Filter by priority
  - Sort by (Recently Added, Priority, Alphabetical)

### Smart Features
- **Focus Mode**: Highlight and focus on only high-priority incomplete tasks
- **Random Task Picker**: When you're stuck, get a random incomplete task suggestion
- **Progress Analytics**: View completion statistics, breakdown by priority/category, and visual progress tracking

### Pages
1. **Dashboard**: All tasks with form, filtering, sorting, and focus mode
2. **Analytics**: Progress stats, completion rates, and category/priority breakdown

## Tech Stack
- **React 18** with Hooks (useState, useEffect)
- **React Router v6** for navigation
- **Vite** for fast development
- **localStorage** for data persistence

## Project Structure
```
react-assmt/
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskItem.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── Analytics.jsx
│   ├── styles/
│   │   ├── Dashboard.css
│   │   ├── Analytics.css
│   │   ├── TaskForm.css
│   │   ├── TaskList.css
│   │   └── TaskItem.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

## Setup & Installation

1. **Navigate to project folder**
   ```bash
   cd react-assmt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## How to Use

### Adding a Task
1. Go to **Dashboard**
2. Fill in the task form:
   - **Title** (required): What needs to be done?
   - **Priority**: Low, Medium, or High
   - **Category**: Optional (e.g., Work, Personal, Health)
3. Click "➕ Add Task"

### Managing Tasks
- **Complete**: Check the checkbox to mark as done
- **Delete**: Click 🗑️ to remove
- **Filter**: Use dropdown filters for category/priority
- **Sort**: Organize by date added, priority, or alphabetically

### Focus Mode
Click "🎯 Focus Mode: OFF/ON" to toggle filtering to only high-priority incomplete tasks

### Analytics
Visit the Analytics page to see:
- Total tasks, completed count, completion rate
- Visual progress bar
- Breakdown by priority level
- Breakdown by category
- Random incomplete task suggestion

## Data Persistence
All tasks are automatically saved to browser's localStorage and persist across sessions.

## Interactions Implemented
1. ✅ **Toggle Complete** - Mark tasks done/undone
2. 🗑️ **Delete** - Remove tasks
3. 🔍 **Filter by Category** - View tasks by category
4. 🎯 **Filter by Priority** - View tasks by priority level
5. 📊 **Sort** - Order by date, priority, or name
6. 💡 **Focus Mode** - Smart filtering of high-priority tasks
7. 🎲 **Random Picker** - Suggest a random task from Analytics

## Responsive Design
The app is fully responsive and works great on mobile, tablet, and desktop devices.

## Color Theme
- Primary: Purple (#667eea) and Dark Purple (#764ba2)
- High Priority: Red (#f5576c)
- Medium Priority: Yellow (#f7b731)
- Low Priority: Cyan (#00d2d3)
