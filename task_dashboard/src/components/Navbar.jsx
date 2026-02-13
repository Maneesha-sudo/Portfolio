import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(TaskContext);

  return (
    <nav className={`nav ${darkMode ? "dark" : ""}`}>
      <div className="nav-content">
        <h2 className="logo">Task Manager dahsboard</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/about">About</Link>
        </div>

        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
