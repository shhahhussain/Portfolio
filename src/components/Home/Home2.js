import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../Picture/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/shhahhussain",
    icon: <AiFillGithub />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/shhahhussain",
    icon: <AiOutlineTwitter />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shah-hussain-a0771b204/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shhah_hussain/",
    icon: <AiFillInstagram />,
  },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learned
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like{" "}
              <i>
                <b className="purple"> Javascript. </b>
              </i>
              <br />
              <br />
              My field of interest is building new{" "}
              <i>
                <b className="purple">Web Technologies and Products </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and{" "}
              <i>
                <b className="purple"> Modern JavaScript Libraries and Frameworks </b>
              </i>{" "}
              like{" "}
              <i>
                <b className="purple"> React.js </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>Feel free to <span className="purple">connect</span> with me</p>
            <ul className="home-about-social-links">
              {socialLinks.map((socialLink, index) => (
                <li key={index} className="social-icons">
                  <a
                    href={socialLink.link}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    {socialLink.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
