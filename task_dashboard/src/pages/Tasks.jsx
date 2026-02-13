import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Filter from "../components/Filter";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Tasks() {
  const { filteredTasks } = useContext(TaskContext);

  return (
    <div className="page">
      <Filter />
      <TaskForm />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}
