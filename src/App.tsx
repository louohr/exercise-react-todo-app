import { useState } from "react";
import "./App.css";

// Function för To-Do list
function ToDoList() {
  const [tasks, setTasks] = useState<{ text: String; completed: boolean }[]>([]);
  const [newTask, setNewTask] = useState("");

  // Hantera användar input
  function HandleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value); // Update input value
  }

  // Lägga till task
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, { text: newTask, completed: false }]);
      setNewTask(""); // Clear input
    }
  }

  // Radera task efter index
  function deleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  // Toggle task completion
  function toggleTaskCompletion(index: number) {
    const updatedTasks = tasks.map((task, i) =>
      i == index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  // UI
  return (
    <body>
      <section className="to-do-list">
        <h1>To-Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a new task..."
            value={newTask}
            onChange={HandleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add a task
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : ""}>
              <span className="text">{task.text}</span>
              <button className="complete-btn" onClick={() => toggleTaskCompletion(index)}>
                {task ? "Undo" : "Complete"}
              </button>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ol>
      </section>
    </body>
  );
}

export default ToDoList;
