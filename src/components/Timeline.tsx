import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCode } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Projects</h1>

        <VerticalTimeline>
          {/* CURRENT */}
          <VerticalTimelineElement
            date="2025 - Present"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3>Frontend Developer (Self-Directed)</h3>
            <h4>Tulsa, OK</h4>
            <p>
              Building and deploying modern web applications using React and
              JavaScript. Focused on developing responsive user interfaces,
              integrating APIs, and improving performance and user experience.
            </p>
          </VerticalTimelineElement>

          {/* PROJECT */}
          <VerticalTimelineElement
            date="2025"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3>Movie API App</h3>
            <h4>Personal Project</h4>
            <p>
              Developed a movie discovery application using a public API.
              Implemented dynamic data fetching, loading states, error handling,
              and responsive UI design.
            </p>
          </VerticalTimelineElement>

          {/* PROJECT */}
          <VerticalTimelineElement
            date="2025"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3>Task Manager App</h3>
            <h4>Personal Project</h4>
            <p>
              Built a task management application with interactive UI
              components, state management, and clean component architecture.
            </p>
          </VerticalTimelineElement>

          {/* OTHER WORK */}
          <VerticalTimelineElement
            date="Previous"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Customer Service / Hospitality</h3>
            <h4>Various Roles</h4>
            <p>
              Developed strong communication, problem-solving, and teamwork
              skills while working in fast-paced environments.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
