import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact Me📞</h1>
      <div className="contact-form-container">
        <div className="contact-form">
          <h2>Send me an Email</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
        <button className="resume-button">Download my Resume</button>

        <div className="footer-container">
          <ul className="footer-links">
            <li>
              <a href="https://www.facebook.com/tazo.mirianashvili/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#3B5998", fontSize: "2.3rem" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tamazi-mirianashvili-735600210/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#0072B1", fontSize: "2.3rem" }}
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/batonitamazi">
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "black", fontSize: "2.3rem" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
