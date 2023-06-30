import React from "react";
import "./workExperience.css";

const WorkExperience = () => {
  return (
    <section id="work">
      <h1>Work Experience</h1>
      <ul className="working-experience-list">
        <li className="work-experience-list-item">
          <div className="work-item">
            <img src="./assets/phubber.png" alt="Phubber logo" />
            <div className="company-info">
              <h2>Phubber</h2>
              <h3>Mobile Application Tester/Analitycs</h3>
              <p>2021 June - 2022 June</p>
              <p>
                I was working on Ecommerce Mobile Application written in React
                native ⚛️. I was writing test cases and doing some bug 🪲
                analytics 🔍
              </p>
            </div>
          </div>
        </li>
        <li className="work-experience-list-item">
          <div className="work-item">
            <img src="./assets/fina.jpg" alt="Fina Logo" />
            <div className="company-info">
              <h2>Fina</h2>
              <h3>Full-Stack Software Engineer</h3>
              <p>2023 March - Ongoing</p>
              <p>
                I am working on a Full Stack ERP Systems, which is Written in
                Angular and asp.net core Framework so am doing Full Stacking
                things 😁
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default WorkExperience;
