import React from "react";
import "../assets/styles/Project.scss";

import mock01 from "../assets/images/Screenshot 2026-04-24 at 9.55.43 PM.png";
import mock02 from "../assets/images/Screenshot 2026-04-24 at 9.58.43 PM.png";
import mock03 from "../assets/images/Screenshot 2026-04-24 at 10.00.11 PM.png";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        {/* MOVIE APP */}
        <div className="project">
          <a
            href="https://movie-api-app-bc.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="Movie App" />
          </a>

          <h2>Movie Discovery App</h2>

          <p>
            Built a responsive movie search application using a public API.
            Implemented dynamic data fetching, loading states, error handling,
            and clean UI with React.
          </p>
        </div>

        {/* TASK MANAGER */}
        <div className="project">
          <a
            href="https://task-manager-app-bc.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="Task Manager" />
          </a>

          <h2>Task Manager App</h2>

          <p>
            Developed an interactive task management app with state management,
            component-based architecture, and responsive design.
          </p>
        </div>

        {/* EXPENSE TRACKER */}
        <div className="project">
          <a
            href="https://expense-tracker-bc.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="Expense Tracker" />
          </a>

          <h2>Expense Tracker</h2>

          <p>
            Created a financial tracking application with real-time updates,
            data visualization, and user-friendly UI.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
