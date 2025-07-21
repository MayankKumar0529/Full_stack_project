import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/tasks")
      .then(res => setTasks(res.data));
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    axios.post("http://127.0.0.1:8000/tasks", { title })
      .then(res => {
        setTasks([...tasks, res.data]);
        setTitle("");
      });
  };

  const deleteTask = (id) => {
    axios.delete(`http://127.0.0.1:8000/tasks/${id}`)
      .then(() => setTasks(tasks.filter(t => t.id !== id)));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Task Manager</h1>
      <form onSubmit={addTask} style={{ marginBottom: "20px" }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New Task"
          required
          style={{ padding: "8px", width: "70%", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>Add</button>
      </form>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}>
            <span>{task.title}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
