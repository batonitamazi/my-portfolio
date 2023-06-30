import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container left-container">
        <h4>Tamazi Mirianashvili</h4>
        <h3>Get to know me</h3>
        <p>
          As a passionate programmer and computer science geek, I find immense
          joy and fulfillment in exploring the vast realm of technology. My
          journey in the world of programming began early on, captivated by the
          magic of turning lines of code into functional software and innovative
          solutions. With a firm foundation in computer science, I have honed my
          skills to become a versatile and dedicated programmer. My programming
          expertise encompasses a wide range of languages and technologies. From
          the elegant simplicity of Python to the robustness of Java, I embrace
          the diversity of programming languages, always eager to explore and
          learn new ones. My curiosity extends beyond the surface level, as I
          dive deep into the core concepts of algorithms, data structures, and
          software design patterns. Solving complex problems and optimizing code
          efficiency excite me, driving me to create elegant and scalable
          solutions.
        </p>
        <div className="button-container">
          <a href="#work">
            <button>Work Experience</button>
          </a>
        </div>
      </div>
      <div className="container right-container">
        <img
          src="./assets/my-picture.jpg"
          alt="Tamaz Mirianashvili Developer"
        />
      </div>
    </section>
  );
};

export default About;
