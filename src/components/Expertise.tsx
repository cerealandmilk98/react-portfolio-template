import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode, faWrench } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

/* =========================
   SKILLS DATA
========================= */

const frontendSkills = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "SASS",
];

const toolsSkills = ["Git", "GitHub", "VS Code", "Postman", "Chrome DevTools"];

const learningSkills = [
  "Next.js",
  "REST APIs",
  "Performance Optimization",
  "Responsive Design",
];

/* =========================
   COMPONENT
========================= */

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Skills</h1>

        <div className="skills-grid">
          {/* FRONTEND */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frontend Development</h3>
            <p>
              I build responsive, component-driven web applications using React
              and modern JavaScript. I focus on creating clean, maintainable UI
              with reusable components, efficient state management, and
              optimized rendering performance.
            </p>

            <p>
              My work includes integrating REST APIs, handling asynchronous
              data, implementing loading/error states, and ensuring applications
              are accessible and responsive across devices.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Core:</span>
              {frontendSkills.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* TOOLS */}
          <div className="skill">
            <FontAwesomeIcon icon={faWrench} size="3x" />
            <h3>Tools & Workflow</h3>
            <p>
              I use modern development tools and workflows to write clean,
              maintainable code and manage projects efficiently. I’m comfortable
              using Git for version control, collaborating through GitHub, and
              debugging applications using browser developer tools.
            </p>

            <p>
              I follow best practices such as structured file organization,
              reusable component patterns, and consistent code formatting to
              ensure scalability and readability.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tools:</span>
              {toolsSkills.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* LEARNING */}
          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <h3>Core Expertise</h3>
            <p>
              Experienced in building modern frontend applications with React,
              focusing on scalable architecture, performance optimization, and
              responsive UI design.
            </p>

            <p>
              Continuously refining advanced React patterns, API integration
              strategies, and UI/UX best practices to deliver high-quality user
              experiences.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Exploring:</span>
              {learningSkills.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
