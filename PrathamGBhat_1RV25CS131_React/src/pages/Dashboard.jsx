import { useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import '../styles/Dashboard.css'

// Dashboard page with task filtering, sorting, and smart focus mode feature
export default function Dashboard({ tasks, onAddTask, onDeleteTask, onToggleTask }) {

  // State for filtering and sorting tasks by category and priority
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterPriority, setFilterPriority] = useState('all')
  const [sortBy, setSortBy] = useState('created')

// Project specific smart feature - FocusMode highlights high priority incomplete tasks
  const [focusMode, setFocusMode] = useState(false)

// Extract unique categories from all tasks for dynamic filter dropdown
  const categories = ['all', ...new Set(tasks.map(t => t.category).filter(Boolean))]

// Filter tasks based on selected category and priority
  let filteredTasks = tasks.filter(task => {
    const categoryMatch = filterCategory === 'all' || task.category === filterCategory
    const priorityMatch = filterPriority === 'all' || task.priority === filterPriority
    return categoryMatch && priorityMatch
  })

// Apply sorting logic to filtered tasks
  if (sortBy === 'priority') {

    // Project specific: Sort by priority levels with custom ordering
    const priorityOrder = { high: 3, medium: 2, low: 1 }
    filteredTasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])
  } else if (sortBy === 'created') {
    filteredTasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  } else if (sortBy === 'alphabetical') {
    filteredTasks.sort((a, b) => a.title.localeCompare(b.title))
  }

// Project specific smart feature: Focus mode shows only high-priority incomplete tasks
  if (focusMode) {
    filteredTasks = filteredTasks.filter(t => t.priority === 'high' && !t.completed)
  }

// Calculate completion statistics
  const completedCount = tasks.filter(t => t.completed).length

  return (
    <div className="dashboard">
      <TaskForm onAddTask={onAddTask} />

      <div className="controls-section">
        <div className="controls">
          <div className="control-group">
            <label>Filter by Category:</label>
            <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>Filter by Priority:</label>
            <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
              <option value="all">All Priorities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div className="control-group">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="created">Recently Added</option>
              <option value="priority">Priority</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>

          {/* Project specific interaction: Toggle focus mode to show high-priority tasks only */}
          <button
            className={`focus-btn ${focusMode ? 'active' : ''}`}
            onClick={() => setFocusMode(!focusMode)}
          >
            {focusMode ? 'Focus Mode: ON' : 'Focus Mode: OFF'}
          </button>
        </div>

        {/* Display task count statistics */}
        <div className="stats">
          <span className="stat-item">
            Total: <strong>{tasks.length}</strong>
          </span>
          <span className="stat-item">
            Completed: <strong>{completedCount}</strong>
          </span>
          <span className="stat-item">
            Remaining: <strong>{tasks.length - completedCount}</strong>
          </span>
        </div>
      </div>

      {/* Show info when focus mode is active */}
      {focusMode && (
        <div className="focus-info">
          Focus Mode: Showing only high-priority tasks. Stay focused!
        </div>
      )}

      <TaskList 
        tasks={filteredTasks} 
        onDeleteTask={onDeleteTask}
        onToggleTask={onToggleTask}
      />

      {/* Show empty state message when no tasks match current filters */}
      {filteredTasks.length === 0 && (
        <div className="empty-state">
          <p>No tasks to show. Great job! Or add a new one.</p>
        </div>
      )}
    </div>
  )
}
