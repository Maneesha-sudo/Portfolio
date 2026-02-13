import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page home">
      
      {/* Hero Section */}
      <div className="home-hero">
        <h1 className="home-title">
          Organize Your Work. Stay Productive.
        </h1>

        <p className="home-subtitle">
          TaskDash is a modern task management dashboard built with React,
          designed to help you manage priorities, track progress,
          and stay focused every day.
        </p>

        <button 
          className="home-cta"
          onClick={() => navigate("/tasks")}
        >
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="home-features-grid">
        <div className="feature-card">
          <h3>⚡ Real-Time Task Management</h3>
          <p>Add, edit, delete, and complete tasks instantly.</p>
        </div>

        <div className="feature-card">
          <h3>🌙 Dark Mode Support</h3>
          <p>Switch between light and dark themes for better usability.</p>
        </div>

        <div className="feature-card">
          <h3>💾 Persistent Storage</h3>
          <p>Your tasks are saved using localStorage and stay even after refresh.</p>
        </div>
      </div>

      <p className="home-footer">
        Start managing your tasks smarter today 🚀
      </p>
    </div>
  );
}
