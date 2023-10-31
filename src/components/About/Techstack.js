import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { TbSql } from "react-icons/tb";

function Techstack() {
  const techIcons = [
    DiJavascript1,
    DiNodejs,
    TbSql,
    DiReact,
    DiMongodb,
    DiGit,
    SiFirebase,
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((Icon, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
