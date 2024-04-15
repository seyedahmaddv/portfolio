import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Seyed Ahmad </span>
            from <span className="purple"> francfort, Germany.</span>
            <br />
            I am freelancer.
            <br />
            I have successfully completed my Master's degree in Computer Engineering 
            with a Software Engineering specialization at Azad University of Malard.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learn and teach so that the world becomes better."{" "}
          </p>
          <footer className="blockquote-footer">SeyedAhmad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
