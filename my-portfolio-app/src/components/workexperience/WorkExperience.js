import React from "react";
import "./workExperience.css";

const WorkExperience = () => {
  return (
    <section id="work">
      <h1>Work Experience</h1>
      <ul className="working-experience-list">
        <li>
          <div className="work-item">
            <div className="left-column">
              <img src="./assets/logo.png" alt="Company 1 Logo" />
              <div className="company-info">
                <h2>Company 1</h2>
                <h3>Job Title 1</h3>
                <p>Date - Date</p>
                <p>Description of your work experience.</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="work-item second-working-item">
            <div className="left-column">
              <div className="company-info">
                <h2>Company 2</h2>
                <h3>Job Title 2</h3>
                <p>Date - Date</p>
                <p>Description of your work experience.</p>
              </div>
              <img src="./assets/logo.png" alt="Company 2 Logo" />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default WorkExperience;
