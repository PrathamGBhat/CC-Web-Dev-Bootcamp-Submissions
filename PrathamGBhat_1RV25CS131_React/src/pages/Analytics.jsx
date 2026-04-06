import { useState } from 'react'
import '../styles/Analytics.css'

// Analytics page with progress statistics and project specific random task picker feature
export default function Analytics({ tasks }) {
  const [showByCategory, setShowByCategory] = useState(true)

// Calculate completion statistics
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(t => t.completed).length
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

// Group tasks by category for breakdown statistics
  const byCategory = {}
  tasks.forEach(task => {
    const cat = task.category || 'Other'
    if (!byCategory[cat]) {
      byCategory[cat] = { total: 0, completed: 0 }
    }
    byCategory[cat].total++
    if (task.completed) byCategory[cat].completed++
  })

// Group tasks by priority level for breakdown statistics
  const byPriority = {
    high: { total: 0, completed: 0 },
    medium: { total: 0, completed: 0 },
    low: { total: 0, completed: 0 }
  }
  tasks.forEach(task => {
    byPriority[task.priority].total++
    if (task.completed) byPriority[task.priority].completed++
  })

// Project specific smart feature: Pick random incomplete task for user when stuck
  const incompleteTasks = tasks.filter(t => !t.completed)
  const randomTask = incompleteTasks.length > 0 
    ? incompleteTasks[Math.floor(Math.random() * incompleteTasks.length)]
    : null
  return (
    <div className="analytics">
      <div className="analytics-header">
        <h2>Progress Analytics</h2>
      </div>

      {/* Display main statistics as cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Tasks</div>
          <div className="stat-value">{totalTasks}</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Completed</div>
          <div className="stat-value">{completedTasks}</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Remaining</div>
          <div className="stat-value">{totalTasks - completedTasks}</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Completion Rate</div>
          <div className="stat-value">{completionRate}%</div>
        </div>
      </div>

      {/* Visual progress bar showing completion percentage */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${completionRate}%` }}></div>
      </div>

      {/* Breakdown sections for priority and category statistics */}
      <div className="analytics-sections">
        <div className="section">
          <h3>By Priority</h3>
          <div className="breakdown">
            {Object.entries(byPriority).map(([priority, data]) => (
              <div key={priority} className={`breakdown-item priority-${priority}`}>
                <span className="breakdown-label">
                  {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
                </span>
                <span className="breakdown-value">
                  {data.completed}/{data.total}
                </span>
                <div className="mini-progress">
                  <div 
                    className="mini-fill"
                    style={{ width: `${data.total > 0 ? (data.completed / data.total) * 100 : 0}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h3>By Category</h3>
          <div className="breakdown">
            {Object.entries(byCategory).length > 0 ? (
              Object.entries(byCategory).map(([category, data]) => (
                <div key={category} className="breakdown-item">
                  <span className="breakdown-label">{category}</span>
                  <span className="breakdown-value">{data.completed}/{data.total}</span>
                  <div className="mini-progress">
                    <div 
                      className="mini-fill"
                      style={{ width: `${data.total > 0 ? (data.completed / data.total) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-message">No categories yet</p>
            )}
          </div>
        </div>
      </div>

      {/* Project specific smart feature: Show random task suggestion when incomplete tasks exist */}
      {incompleteTasks && incompleteTasks.length > 0 && (
        <div className="suggestion-box">
          <h3>Random Task Picker</h3>
          <p>Not sure what to do next? Here's a random incomplete task:</p>
          <div className="suggested-task">
            <div className="task-title">{randomTask.title}</div>
            <div className="task-meta">
              <span className={`priority-badge priority-${randomTask.priority}`}>
                {randomTask.priority.toUpperCase()}
              </span>
              <span className="category-badge">{randomTask.category}</span>
            </div>
          </div>
        </div>
      )}

      {/* Show empty state when no tasks have been added */}
      {totalTasks === 0 && (
        <div className="empty-state">
          <p>No tasks yet. Start adding tasks to see analytics!</p>
        </div>
      )}
    </div>
  )
}
