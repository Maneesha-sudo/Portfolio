import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskList() {
  const { tasks, deleteTask, toggleComplete, editTask } =
    useContext(TaskContext);

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editPriority, setEditPriority] = useState("medium");

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditText(task.title);
    setEditPriority(task.priority);
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;
    editTask(id, editText, editPriority);
    setEditingId(null);
  };

  if (!tasks.length) return <p className="empty">No tasks found</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-card ${task.completed ? "done" : ""}`}
        >
          <div className="task-left">
            {editingId === task.id ? (
              <>
                <input
                  className="edit-input"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <select
                  value={editPriority}
                  onChange={(e) => setEditPriority(e.target.value)}
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </>
            ) : (
              <>
                <span>{task.title}</span>
                <span className={`priority ${task.priority}`}>
                  {task.priority}
                </span>
              </>
            )}
          </div>

          <div className="actions">
  {editingId === task.id ? (
    <>
      <button className="save" onClick={() => saveEdit(task.id)}>
        Save
      </button>
      <button className="cancel" onClick={() => setEditingId(null)}>
        Cancel
      </button>
    </>
  ) : (
    <>
      <button
        className="complete"
        onClick={() => toggleComplete(task.id)}
      >
        {task.completed ? "Undo" : "Done"}
      </button>

      <button
        className="edit"
        onClick={() => startEdit(task)}
      >
        Edit
      </button>

      <button
        className="delete"
        onClick={() => deleteTask(task.id)}>Delete
      </button>
    </>
  )}
</div>

        </li>
      ))}
    </ul>
  );
}
