import { useState } from "react";
import "./App.css";

// funktion för to do listan
function ToDoList() {
  const [tasks, setTasks] = useState(["Äta frukost"]);
  const [newTask, setNewTask] = useState("");

  // vad användaren skriver in
  function HandleInputChange(event) {
    setNewTask(event.target.value); // ändra input
  }

  // lägga till task
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      // clear
      setNewTask("");
    }
  }

  // ta bort task, index=task
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  // ui
  return (
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
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ToDoList;
