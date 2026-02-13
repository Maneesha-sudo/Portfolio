import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskProvider, TaskContext } from "./context/TaskContext";
import Nav from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import "./App.css";

function Layout() {
  const { darkMode } = useContext(TaskContext);

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </TaskProvider>
  );
}
