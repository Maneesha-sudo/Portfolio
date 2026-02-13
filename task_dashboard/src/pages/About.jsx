import React from "react";

export default function About() {
  return (
    <div className="page about">
      <h2 className="about-title">About TaskDash</h2>

      <p className="about-intro">
        TaskDash is a modern task management dashboard built to simplify
        daily productivity. It provides a clean and intuitive interface
        for organizing, tracking, and prioritizing tasks efficiently.
      </p>

      <div className="about-section">
        <h3>🚀 Why TaskDash?</h3>
        <p>
          Many task management apps are overloaded with features.
          TaskDash focuses on simplicity, speed, and usability —
          helping users stay productive without distractions.
        </p>
      </div>

      <div className="about-section">
        <h3>✨ Key Features</h3>
        <ul>
          <li>✔ Add, edit, delete, and complete tasks</li>
          <li>✔ Task prioritization (High / Medium / Low)</li>
          <li>✔ Smart filtering system</li>
          <li>✔ Dark mode support</li>
          <li>✔ Global state management using Context API</li>
          <li>✔ Persistent storage using localStorage</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>🛠️ Technology Stack</h3>
        <p>
          Built using React.js with functional components and hooks,
          Context API for global state management, React Router for
          navigation, and modern CSS for responsive design.
        </p>
      </div>

      <div className="about-section">
        <h3>🎯 Project Goal</h3>
        <p>
          This project demonstrates clean component architecture,
          real-time UI updates, state management patterns, and
          scalable frontend design practices.
        </p>
      </div>
    </div>
  );
}
