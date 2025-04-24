import React, { useState } from "react";
import "./TodoList.Module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (!newTask.trim()) return toast.error("Boş task əlavə etmək olmaz!");

    setTasks([...tasks, { text: newTask.trim(), isDone: false }]);
    toast.success("Yeni task əlavə olundu!");
    setNewTask("");
  };

  const deleteTask = (index) => {
    if (tasks[index].isDone) {
      const updated = [...tasks];
      updated.splice(index, 1);
      setTasks(updated);
      toast.info("Task silindi");
    }
  };

  const editTask = (index) => {
    setEditIndex(index);
    setNewTask(tasks[index].text);
  };

  const updateTask = () => {
    if (!newTask.trim()) return toast.error("Boş task ola bilməz!");
    const updated = [...tasks];
    updated[editIndex].text = newTask.trim();
    setTasks(updated);
    toast.success("Task yeniləndi");
    setEditIndex(null);
    setNewTask("");
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].isDone = !updated[index].isDone;
    setTasks(updated);
    toast.info(updated[index].isDone ? "Task tamamlandı" : "Task geri alındı");
  };

  const clearAll = () => {
    if (tasks.length === 0) return toast.warn("Silinəcək task yoxdur!");
    setTasks([]);
    toast.success("Bütün tasklar silindi");
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">To Do List</h2>

      <div className="todo-card">
        <div className="todo-input-group">
          <input
            type="text"
            className="todo-input"
            placeholder="Add new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={editIndex !== null ? updateTask : addTask}
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
          <button className="clear-all" onClick={clearAll}>
            Clear All
          </button>
        </div>

        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`todo-item ${task.isDone ? "done" : "not-done"}`}
            >
              <span className="task-index">{index + 1}.</span>

              {editIndex === index ? (
                <input
                  className="edit-input"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              ) : (
                <span
                  className={`task-text ${task.isDone ? "line-through" : ""}`}
                >
                  {task.text}
                </span>
              )}

              <div className="task-actions">
                {editIndex === index ? (
                  <button className="save-btn" onClick={updateTask}>
                    ✅
                  </button>
                ) : (
                  <>
                    <button
                      className="done-btn"
                      onClick={() => toggleDone(index)}
                    >
                      ✔️
                    </button>
                    <button
                      className="edit-btn"
                      onClick={() => editTask(index)}
                    >
                      ✏️
                    </button>
                    {task.isDone && (
                      <button
                        className="delete-btn"
                        onClick={() => deleteTask(index)}
                      >
                        ❌
                      </button>
                    )}
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TodoList;
