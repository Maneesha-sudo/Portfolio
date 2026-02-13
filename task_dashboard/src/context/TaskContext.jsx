import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
  return JSON.parse(savedTasks);
} else {
  return [];
}

  });

  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([task, ...tasks]);

  const deleteTask = (id) =>
    setTasks(tasks.filter((t) => t.id !== id));

  const toggleComplete = (id) =>
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );

  const editTask = (id, title, priority) =>
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, title, priority } : t
      )
    );

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; // "all"
  });

  return (
    <TaskContext.Provider
      value={{
        tasks: filteredTasks, 
        addTask,
        deleteTask,
        toggleComplete,
        editTask,
        filter,
        setFilter,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
