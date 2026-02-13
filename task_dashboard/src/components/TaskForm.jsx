import { useContext, useRef, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const titleRef = useRef();
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titleRef.current.value.trim()) return;

    addTask({
      id: Date.now(),
      title: titleRef.current.value,
      completed: false,
      priority,
    });

    titleRef.current.value = "";
    setPriority("medium");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input ref={titleRef} placeholder="Enter task..." />

     <select
  className="priority-select"
  value={priority}
  onChange={(e) => setPriority(e.target.value)}>
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>
</select>


      <button>Add Task</button>
    </form>
  );
}
