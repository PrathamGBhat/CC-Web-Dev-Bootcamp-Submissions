import { useState } from 'react'
import '../styles/TaskForm.css'

// Reusable form component for adding new tasks with title, priority, and category properties
export default function TaskForm({ onAddTask }) {

// State for form input fields
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')
  const [category, setCategory] = useState('')

// Handle form submission with validation and reset
  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() === '') {
      alert('Please enter a task title')
      return
    }

// Call parent component callback with form data - standard React pattern
    onAddTask({ title, priority, category })

// Reset form fields after submission
    setTitle('')
    setPriority('medium')
    setCategory('')
  }

  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Task Title *</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What needs to be done?"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g., Work, Personal"
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Add Task
        </button>
      </form>
    </div>
  )
}