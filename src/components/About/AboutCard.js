import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shah Hussain </span>
            from <span className="purple"> Peshawar, Pakistan.</span>
            <br /> I graduated from University of Engineery and Technology Peshawar in Computer System Engineerting.
            <br />
            Additionally, I am currently employed as a software developer at
            Antonx.
            <br />
            <br />
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
