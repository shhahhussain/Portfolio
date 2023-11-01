import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import laptopImg from "../Picture/about.png";
import waterdelivery from "../Picture/water-delivery-project.png"
import adss from "../Picture/adss.png"
import shadiyana from "../Picture/shadiyana.png"

const frontEnd = [
  {
    imgPath: shadiyana,
    title: "Shadiyana Wedding Bazar",
    description: "Worked as a Frontend Developer to build their Website for an upcoming Event which was built with react.js.",
    ghLink: "https://github.com/shhahhussain",
    demoLink: "https://www.shadiyana.pk/wedding-bazaar",
  },
  {
    imgPath: adss,
    title: "ADSS Global",
    description: "A freelance project converted from WordPress with a team to React.js and Ant Design, making it responsive for all devices and user-friendly.",
    ghLink: "https://github.com/shhahhussain",
    demoLink: "https://adssottawa.com/",
  },
  {
    imgPath: waterdelivery,
    title: "Water Delivery Website",
    description: "A project built during my time in Antonx using React.js for the front-end of water delivery services.",
    ghLink: "https://github.com/shhahhussain",
    demoLink: "",
  },
  {
    imgPath: laptopImg,
    title: "Water Delivery Website",
    description: "A project built during my time in Antonx using React.js for the front-end of water delivery services.",
    ghLink: "https://github.com/shhahhussain",
    demoLink: "",
  },
  {
    imgPath: laptopImg,
    title: "Iqra model school ",
    description: "A freelance project built using React js ",
    ghLink: "https://github.com/shhahhussain",
    demoLink: "",
  },
];
const backEnd = [
  {
    imgPath: waterdelivery,
    title: "Water Delivery Management System",
    description: "A project built during my time in Antonx using Node.js with Express for the back-end to manage water delivery services.",
    ghLink: "https://github.com/shhahhussain/water-delivery-backend-nodejs",
    demoLink: "https://rich-puce-cockroach-vest.cyclic.app/",
  },
  {
    imgPath: laptopImg,
    title: "Movie website backend Dashboard",
    description: "A project built for practice using Node.js with Express for the back-end to control the movie website backend",
    ghLink: "https://github.com/shhahhussain/movie-website-backend",
    demoLink: "",
  },
  {
    imgPath: laptopImg,
    title: "Iqra model school ",
    description: "A freelance project built backend in Node js with Express js",
    ghLink: "https://github.com/shhahhussain",
    demoLink: "",
  },

];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
          
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <h1 className="project-heading">
           <strong className="purple">FRONT-END IN REACT</strong>
          
        </h1>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {frontEnd.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
           <strong className="purple">BACK-END IN NODE JS</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {backEnd.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
