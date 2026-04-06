import '../styles/TaskItem.css'

// Individual task card component with completion toggle and delete button
export default function TaskItem({ task, onDelete, onToggle }) {

  // Map priority levels to visual indicators for UI feedback
  const getPriorityEmoji = (priority) => {
    const emojis = {
      high: 'H',
      medium: 'M',
      low: 'L'
    }
    return emojis[priority] || '?'
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">

        {/* Checkbox for toggling task completion status - project specific interaction */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="task-checkbox"
        />
        <div className="task-details">
          <h3 className="task-title">{task.title}</h3>
          <div className="task-meta">

            {/* Display priority level with visual styling */}
            <span className={`priority-badge priority-${task.priority}`}>
              {getPriorityEmoji(task.priority)} {task.priority.toUpperCase()}
            </span>

            {/* Display category tag if present */}
            {task.category && (
              <span className="category-badge">{task.category}</span>
            )}
          </div>
        </div>
      </div>

      {/* Delete button for removing task - project specific interaction */}
      <button
        onClick={() => onDelete(task.id)}
        className="delete-btn"
        title="Delete task"
      >
        Delete
      </button>
    </div>
  )
}