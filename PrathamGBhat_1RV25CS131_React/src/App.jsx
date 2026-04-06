import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import './App.css'

// Main app component with global routing and task state management
export default function App() {

  // Initialize tasks state from empty array
  const [tasks, setTasks] = useState([])


  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

// Save tasks to localStorage whenever they change - project specific persistence requirement
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

// Add new task with generated ID and timestamps
  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      title: task.title,
      priority: task.priority,
      category: task.category,
      completed: false,
      createdAt: new Date().toISOString(),
    }
    setTasks([newTask, ...tasks])
  }

// Remove task by ID from tasks array
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

// Toggle task completion status - project specific interaction
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }


  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1 className="app-title">Smart Task Manager</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">Dashboard</Link>
            <Link to="/analytics" className="nav-link">Analytics</Link>
          </div>
        </nav>


        {/* Routing configuration with task management props passed to pages */}
        <Routes>
          <Route 
            path="/" 
            element={
              <Dashboard 
                tasks={tasks}
                onAddTask={addTask}
                onDeleteTask={deleteTask}
                onToggleTask={toggleTask}
              />
            } 
          />
          <Route 
            path="/analytics" 
            element={<Analytics tasks={tasks} />} 
          />
        </Routes>
      </div>
    </Router>
  )
}
