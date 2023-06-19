import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <p>You can reach me through the following channels:</p>
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ color: "3B5998", fontSize: "1.3rem" }}
          />
          <a href="https://www.facebook.com/yourprofile">Facebook</a>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#0072B1", fontSize: "1.3rem" }}
          />
          <a href="https://www.linkedin.com/in/yourprofile">LinkedIn</a>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "black", fontSize: "1.3rem" }}
          />
          <a href="https://github.com/yourprofile">GitHub</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
