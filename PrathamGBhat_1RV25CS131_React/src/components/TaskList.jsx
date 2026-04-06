import TaskItem from './TaskItem'
import '../styles/TaskList.css'

// Component that renders list of tasks using map function - standard React pattern
export default function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <div className="task-list">

      {/* Iterate through tasks array and render individual TaskItem components */}
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggle={onToggleTask}
        />
      ))}
    </div>
  )
}
